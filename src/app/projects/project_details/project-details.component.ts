import { Title } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
// import { NavBarItems } from '../../navbar/navbar';
// import { ViewContentService } from '../../shared/view-content.service'
import { Router, ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';

@Component({
  templateUrl: './project-details.component.html'
})

export class ProjectsDetailsComponent implements OnInit {

  // Class variables
  private currentContent;

  constructor(
    private title: Title,
    private route : ActivatedRoute
    )
  { }

  // To be run on init
  ngOnInit() {
    // Assign the data to local variable for use
    this.route.data.subscribe(content => {
      this.currentContent = content.project[0].view
    })
  }

}