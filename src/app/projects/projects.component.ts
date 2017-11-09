import { Title } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { NavBarItems } from '../navbar/navbar'
import { NavbarService } from '../shared/navbar.service'

@Component({
  templateUrl: './projects.component.html'
})

export class ProjectsComponent implements OnInit {

  // Class variables
  private currentRoute : string;

  // Constrctor for the navbar service
  constructor(
    private NavbarService : NavbarService,
    private title: Title
    ) { }

  // To be run on init
  ngOnInit() {

    this.title.setTitle('Mauricio_Paez | Projects')

    // Check for current route in the service
    this.currentRoute = this.NavbarService.getCurrentRoute();

    // Populate if current route is empty
    if (this.currentRoute.length === 0 || this.currentRoute !== 'Projects') {
      this.NavbarService.setNavbarItems('Projects')
    }
  }

}