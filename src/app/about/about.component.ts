import { Title } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
import { Router } from '@angular/router';
import { ViewContentService } from '../shared/view-content.service'

@Component({
  templateUrl: './about.component.html'
})

export class AboutComponent implements OnInit {

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

    this.currentRoute = this.router.url.slice(1)

    this.title.setTitle('Mauricio_Paez | About')

    // Check for current route in the service
    // this.currentRoute = this.viewContentService.getCurrentRoute();

    // Populate if current route is empty or anything other than what it should be
    // if (this.currentRoute.length === 0 || this.currentRoute !== 'About') {
      this.viewContentService.setNavbarItems(this.currentRoute)
    // }
  }
}