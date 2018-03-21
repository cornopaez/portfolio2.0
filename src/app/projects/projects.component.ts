import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  templateUrl: './projects.component.html'
})

export class ProjectsComponent {

  // private currentContent
  currentContent = {
      view_title: 'Mauricio_Páez | Projects',
      navbar: {
        title: 'Projects',
        links: [
          'Home',
          'About',
          'Contact'
        ]
      }
    };

  constructor(
    private title : Title
    ) {}

  setViewTitle(viewTitle){
    // Set the title for this view
    this.title.setTitle(viewTitle)
  }

  ngOnInit(){
  }
}