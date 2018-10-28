import { Component, Input, OnInit } from '@angular/core';
import { PostComponent } from './../post/post.component';
import { ComponentService } from './../services/component.services';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: any[];
  @Input() index: number;

  constructor(private componentService : ComponentService) { 
  }

  addLike(){
    this.componentService.addLikeSingle(this.index);
  }

  removeLike(){
    this.componentService.removeLikeSingle(this.index);
  }

  removePost(){
    this.componentService.removePost(this.index);
  }

  onSave() {
    this.componentService.savePostToServer();
  }

  ngOnInit(){

  }
}
