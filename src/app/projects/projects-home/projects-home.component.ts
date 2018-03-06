import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ProjectsComponent } from '../projects.component'

@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.sass']
})
export class ProjectsHomeComponent implements OnInit {

  private currentCards

  private currentContent = {
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
    private pc: ProjectsComponent,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    // Get the data for the projects
    this.route.data.subscribe(content => {
      // console.log(content)
      this.currentCards = content.projects
    })

    // Set the title for this view
    this.pc.setViewTitle(this.currentContent.view_title)
  }

}
