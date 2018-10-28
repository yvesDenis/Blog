import {Subject} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComponentService {

  readonly content: string = "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ";
  likePost1:number = 0;
  likePost2:number = 0;
  likePost3:number = 0;

  constructor(private httpClient: HttpClient) { }

  arrayPostSubject = new Subject<any[]>();

  private arrayPost =[
    {
      title : "Mon Premier Post",
      content : "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      loveIts : this.likePost1,
      index:0,
      created_at : new Date()
    },
    {
      title : "Mon Deuxieme Post",
      content : "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      loveIts : this.likePost2,
      index:0,
      created_at : new Date()
    },
    {
      title : "Mon Troisieme Post",
      content : "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      loveIts : this.likePost1,
      index:0,
      created_at : new Date()
    }
  ]

  emitPostSubject() {
    this.arrayPostSubject.next(this.arrayPost.slice());
  }

  addLike(){
    for(let post of this.arrayPost){
        post.loveIts++;
    }
    this.emitPostSubject();
  }
  removeLike(){
    for(let post of this.arrayPost){
        post.loveIts--;
    }
    this.emitPostSubject();
  }

  addLikeSingle(i: number){
    this.arrayPost[i].loveIts++;
    this.emitPostSubject();
    
  }

  removeLikeSingle(i: number){
    this.arrayPost[i].loveIts--;
    this.emitPostSubject();
  }

  removePost(i: number){
    this.arrayPost.splice(this.arrayPost.indexOf(this.arrayPost[i]),1);
    this.emitPostSubject();
  }

  addPost(titre: string, contenu: string) {
    const postObject = {
      title: '',
      content: '',
      loveIts:0,
      index:0,
      created_at: new Date()
    };
    postObject.title = titre;
    postObject.content = contenu;
    postObject.index = this.arrayPost[(this.arrayPost.length - 1)].index + 1;
    this.arrayPost.push(postObject);
    this.emitPostSubject();
  }

  ngOnInit() {
  }

  savePostToServer() {
    this.httpClient
      .put('https://my-blog-cfaae.firebaseio.com/posts/posts.json', this.arrayPost)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getPostFromServer() {
    this.httpClient
      .get<any[]>('https://my-blog-cfaae.firebaseio.com/posts/posts.json')
      .subscribe(
        (response) => {
          this.arrayPost = response;
          this.emitPostSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}