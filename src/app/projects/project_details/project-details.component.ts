import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProjectsComponent } from '../projects.component'

@Component({
  templateUrl: './project-details.component.html'
})

export class ProjectsDetailsComponent implements OnInit {

  // Class variables
  private currentContent;

  constructor(
    private route : ActivatedRoute,
    private pc: ProjectsComponent
    )
  { }

  // To be run on init
  ngOnInit() {
    // Assign the data to local variable for use
    this.route.data.subscribe(content => {
      this.currentContent = content.project[0].view

      // Set the title for the Projects view
      this.pc.setViewTitle(content.project[0].view.view_title)
    })
  }

}