import { Title } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { NavBarItems } from '../../navbar/navbar';
import { ViewContentService } from '../../shared/view-content.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  templateUrl: './project-details.component.html'
})

export class ProjectsDetailsComponent implements OnInit {

  // Class variables
  private currentItems : any = null;
  private currentRoute : string;
  private projectName : string;

  // Constrctor for the navbar service
  constructor(
    private viewContentService : ViewContentService,
    private title: Title,
    private route : ActivatedRoute,
    private location : Location
    )
  { 
    viewContentService.currentNavbarItems$.subscribe(items => {
      this.currentItems = items;
    });
  }

  // Get the route param
  getRouteParam(): void {
    this.projectName = this.route.snapshot.paramMap.get('name')
    // console.log(this.projectName)
  }

  private setBackgroundImage() : any {
    var style = {
      'background' : 'url(' + this.currentItems.image + ')'
    }

    return style;
  }

  // To be run on init
  ngOnInit() {

    // Get the route parameter
    this.getRouteParam();

    // Set the title for the view dynamically
    this.title.setTitle('Mauricio_Paez | ' + this.projectName)

    // Check for current route in the service
    this.currentRoute = this.viewContentService.getCurrentRoute();

    // Populate if current route is empty
    if (this.currentRoute.length === 0 || this.currentRoute !== this.projectName) {
      this.viewContentService.setNavbarItems(this.projectName)
    }
  }

}