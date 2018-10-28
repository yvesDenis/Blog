import { Component, Input,OnInit } from '@angular/core';
import { PostComponent } from './../post/post.component';
import { PostListItemComponentComponent } from './../post-list-item-component/post-list-item-component.component';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() components:PostComponent[]; 

  constructor() { 
  
  }

  ngOnInit() {
    console.log("enter2");
    console.log(this.components[0].title)
  }

}
