import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { NavbarService } from '../shared/navbar.service'


@Component({
  templateUrl: './contact.component.html'
})

export class ContactComponent implements OnInit {

  // Class variables
  private currentRoute : string;

  // Constrctor for the navbar service
  constructor(
    private NavbarService : NavbarService,
    private title : Title
    ) { }

  // To be run on init
  ngOnInit() {

    this.title.setTitle('Mauricio_Paez | Contact')

    // Check for current route in the service
    this.currentRoute = this.NavbarService.getCurrentRoute();

    // Populate if current route is empty
    if (this.currentRoute.length === 0 || this.currentRoute !== 'Contact') {
      this.NavbarService.setNavbarItems('Contact')
    }
  }
}
