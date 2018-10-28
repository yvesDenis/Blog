import { Component, OnInit } from '@angular/core';
import { ComponentService } from './../services/component.services';
import { PostComponent } from './../post/post.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  components : any[];

  postSubscription: Subscription;

  constructor(private componentService: ComponentService) { }

  ngOnInit(){
    console.log("enter");
    this.postSubscription = this.componentService.arrayPostSubject.subscribe(
      (components: any[]) => {
        this.components = components;
      }
    );  
    this.componentService.emitPostSubject();
    if(this.components == null)
      console.log("null");
    else {
      console.log("plainnnnn");
      console.log(<PostComponent>this.components[0].title)
    }
  }
  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

  title = "My blog";
}
