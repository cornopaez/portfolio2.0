import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private title : Title,
    private router: Router
    ) { }

  setNavbar(route: string) {
    this.viewContentService.setNavbarItems(route);
  }

  ngOnInit() {

    // Get current route
    this.currentRoute = this.router.url.slice(1)

    // Set title of page
    this.title.setTitle('Mauricio_Paez | Developer')

    // Set navbar content
    this.viewContentService.setNavbarItems(this.currentRoute)
  }

}