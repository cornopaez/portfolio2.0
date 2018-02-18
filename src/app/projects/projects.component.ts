import { Title } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { NavBarItems } from '../navbar/navbar'
import { Router } from '@angular/router';
import { ViewContentService } from '../shared/view-content.service'

@Component({
  templateUrl: './projects.component.html'
})

export class ProjectsComponent implements OnInit {

  // Class variables
  private currentRoute : string;

  // Constrctor for the navbar service
  constructor(
    private viewContentService : ViewContentService,
    private title: Title,
    private router: Router
    ) { }

  // To be run on init
  ngOnInit() {

    // Get current route
    this.currentRoute = this.router.url.slice(1)

    // Set title of page
    this.title.setTitle('Mauricio_Paez | Projects')

    // Set navbar content
    this.viewContentService.setPageContent(this.currentRoute)

  }

}