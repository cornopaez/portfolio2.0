import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { NavBarItems } from '../navbar/navbar'
import { ViewContentService } from '../shared/view-content.service';

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
    public viewContentService : ViewContentService,
    private title : Title
    ) { }

  setNavbar(route: string) {
    this.viewContentService.setNavbarItems(route);
  }

  ngOnInit() {
    this.title.setTitle('Mauricio_Paez | Developer')

    // Check for current route in the service
    this.currentRoute = this.viewContentService.getCurrentRoute();

    // Populate if current route is empty
    if (this.currentRoute.length !== 0) {
      this.viewContentService.setNavbarItems('')
    }
  }

}