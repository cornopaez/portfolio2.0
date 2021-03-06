import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  templateUrl: './contact.component.html'
})

export class ContactComponent {
  
  currentContent = {
      view_title: 'Mauricio_Páez | Contact',
      navbar: {
        title: 'Contact',
        links: [
          'Home',
          'Projects',
          'About'
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
