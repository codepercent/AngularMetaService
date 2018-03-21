import { Component, OnInit } from '@angular/core';
import {Meta}  from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private meta:Meta) { 
    this.meta.addTags([
      {name : 'title', content : 'Meta Service Demo'},
      {name : 'author', content : 'Amit Kumar'},
      {name : 'description', content : 'Meta service in Angular.'},
      {name : 'revised', content : 'CodePercent, 20/03/2018'},
    ]);

    this.meta.addTag({name : 'description', content : 'Meta service in Angular. Updated'}, true);
    
  }
  ngOnInit() {
  }

}
