import { Component, OnInit } from '@angular/core';
import {Meta}  from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta:Meta) { 
    this.meta.addTags([
      {name : 'title', content : 'Meta Service Demo'},
      {name : 'author', content : 'Amit Kumar'},
      {name : 'revised', content : 'CodePercent, 20/03/2018'},
    ]); 

    var getTitle = this.meta.getTag('name = title');
    this.meta.removeTagElement(getTitle);
  }

  ngOnInit() {
  }

}
