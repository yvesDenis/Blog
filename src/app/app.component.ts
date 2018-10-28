import { Component , OnInit} from '@angular/core';
import { PostViewComponent } from './post-view/post-view.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { ComponentService } from './services/component.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(){

  }

  ngOnInit(){
  }

}
