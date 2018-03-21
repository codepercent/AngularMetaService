import { Component, OnInit } from '@angular/core';
import {Meta}  from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private meta:Meta) { 
    this.meta.addTags([
      {name : 'title', content : 'Meta Service Demo'},
      {name : 'author', content : 'Amit Kumar'},
      {name : 'description', content : 'Meta service in Angular.'},
      {name : 'revised', content : 'CodePercent, 20/03/2018'},
    ]);

    this.meta.addTag({name : 'description', content : 'Meta service in Angular. Updated'}, true);

    var getTitle = this.meta.getTag('name = title');
    console.log(getTitle.content);

    var getDescriptions = this.meta.getTags('name=description');

    console.log(getDescriptions[0].content);

    console.log(getDescriptions[1].content);
    
  }
  ngOnInit() {
  }

}
