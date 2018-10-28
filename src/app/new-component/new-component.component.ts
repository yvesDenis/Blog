import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { ComponentService } from './../services/component.services';
import { Router} from '@angular/router';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {

  constructor(private componentService : ComponentService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const titre = form.value['titre'];
    const contenu = form.value['contenu'];
    this.componentService.addPost(titre,contenu);
    this.router.navigate(['/post/posts']);
}

}
