import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Title }     from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectsService } from './projects.service';


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

  private currentCards;

  constructor(
    private title : Title,
    private projectsService: ProjectsService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(){

    // Get the data for the projects
    this.route.data.subscribe(content => {
      // console.log(content)
      this.currentCards = content.projects
    })

    // Set the title for this view
    this.title.setTitle(this.currentContent.view_title)

  }
}