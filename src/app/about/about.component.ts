import { Title } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
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
    private title: Title
    ) { }

  // To be run on init
  ngOnInit() {

    this.title.setTitle('Mauricio_Paez | About')

    // Check for current route in the service
    this.currentRoute = this.viewContentService.getCurrentRoute();

    // Populate if current route is empty or anything other than what it should be
    if (this.currentRoute.length === 0 || this.currentRoute !== 'About') {
      this.viewContentService.setNavbarItems('About')
    }
  }
}