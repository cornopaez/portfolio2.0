import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ViewContentService } from '../shared/view-content.service';

@Component({
  templateUrl: './projects.component.html'
})

export class ProjectsComponent {

  private currentContent ={
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

  private currentCards = [
    {
      title: 'Portfolio',
      subtitle:'',
      custom_html: '',
      image: '',
      card_class: 'portfolio',
      icons: {
        class_name: 'folder-icon',
        icons: [
          'fa fa-folder-o',
          'fa fa-file-code-o'
        ]
      }
    },
    {
      title: 'PYT Dance',
      subtitle:'Codecademy Capstone Project',
      custom_html: '',
      image: '',
      card_class: 'dance',
      icons: ''
    }
  ];

  constructor(
    private title : Title
    ) {}

  ngOnInit(){

    // Set the title for this view
    this.title.setTitle(this.currentContent.view_title)
    // console.log(this.currentContent)
  }
}