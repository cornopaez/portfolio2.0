import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { ViewContentService } from '../shared/view-content.service'


@Component({
  templateUrl: './contact.component.html'
})

export class ContactComponent implements OnInit {

  // Class variables
  private currentRoute : string;

  // Constrctor for the navbar service
  constructor(
    private viewContentService : ViewContentService,
    private title : Title
    ) { }

  // To be run on init
  ngOnInit() {

    this.title.setTitle('Mauricio_Paez | Contact')

    // Check for current route in the service
    this.currentRoute = this.viewContentService.getCurrentRoute();

    // Populate if current route is empty
    if (this.currentRoute.length === 0 || this.currentRoute !== 'Contact') {
      this.viewContentService.setNavbarItems('Contact')
    }
  }
}
