import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { NavBarItems } from '../navbar/navbar'
import { NavbarService } from '../shared/navbar.service';

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  private linksForButtons : string[] = [
    'Projects',
    'About',
    'Contact'
  ]

  private currentRoute : string;

  constructor(
    public NavbarService : NavbarService,
    private title : Title
    ) { }

  setNavbar(route: string) {
    this.NavbarService.setNavbarItems(route);
  }

  ngOnInit() {
    this.title.setTitle('Mauricio_Paez | Developer')

    // Check for current route in the service
    this.currentRoute = this.NavbarService.getCurrentRoute();

    // Populate if current route is empty
    if (this.currentRoute.length !== 0) {
      this.NavbarService.setNavbarItems('')
    }
  }

}