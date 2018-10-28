import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule}   from '@angular/forms';
import { HttpClientModule }   from '@angular//common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { ComponentService } from './services/component.services';
import { NewComponentComponent } from './new-component/new-component.component';
import { PostViewComponent } from './post-view/post-view.component';
import { Routes ,RouterModule} from '@angular/router';

const appRoutes: Routes = [
  { path: 'post/posts', component: PostViewComponent },
  { path: 'post/new', component: NewComponentComponent },
  { path: '', component: PostViewComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListItemComponentComponent,
    PostListComponentComponent,
    NewComponentComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
