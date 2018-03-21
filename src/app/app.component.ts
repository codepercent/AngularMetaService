import { Component } from '@angular/core';
import {Meta}  from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private meta:Meta){
    this.meta.addTag({name : 'title', content : 'Meta Service Demo'});

    this.meta.addTag({name : 'description', content : 'This tutorial will show you, How to use Meta service in Angular.'});

    this.meta.addTag({name : 'keywords', content : 'Angula,Meta Service'});
  }
}
