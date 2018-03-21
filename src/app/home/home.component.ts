import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent {

  currentContent = {
      view_title: 'Mauricio_Páez | Developer',
      content: {
        image: '../assets/close-up.png',
        description: 'IT Business Analysis, Web Development' ,
        description_links: [
          'Projects',
          'About',
          'Contact'
        ]
      }
    };

  constructor(
    private title : Title
    ) {}

  ngOnInit(){

    // Set the title for this view
    this.title.setTitle(this.currentContent.view_title)
    // console.log(this.currentContent)
  }
}