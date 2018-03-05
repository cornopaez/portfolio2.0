import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router';
// import { ViewContentService } from '../shared/view-content.service';

@Component({
  templateUrl: './about.component.html'
})

export class AboutComponent {
  
  private currentContent = {
      view_title: 'Mauricio_Páez | About',
      navbar: {
        title: 'About',
        links: [
          'Home',
          'Projects',
          'Contact'
        ]
      },
      content: {
        points: [
          {
            title: 'Background',
            description: 'I am a former musician who\'s discovered the joy of coding. I initially learned to code in Java, building small programs for my classes, including some that used SQL databases in the stack. I am handy with SQL and traditional relational database schema design and queries. I’ve since moved on to using a MEAN as my main stack, using it to build this site and deploying exclusively to Heroku. I am familiar and feel comfortable in the languages and technologies below. Feel free to poke around the site and contact me if you have any questions.'
          },
          {
            title: 'Languages and Technology'
          },
          {
            title: 'Experience'
          },
          {
            title: 'Education and Certifications'
          }
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