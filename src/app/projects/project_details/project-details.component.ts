import { Title } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
// import { NavBarItems } from '../../navbar/navbar';
import { ViewContentService } from '../../shared/view-content.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  templateUrl: './project-details.component.html'
})

export class ProjectsDetailsComponent implements OnInit {

  // Class variables
  private currentContent;
  private currentRoute;
  private projectName;
  private arrayClass;

  // Constrctor for the navbar service
  constructor(
    private viewContentService : ViewContentService,
    private title: Title,
    private route : ActivatedRoute,
    private location : Location,
    private router: Router
    )
  { 
    viewContentService.currentPageContentItems$.subscribe(items => {
      this.currentContent = items;
    });
  }

  // Get the route param
  getRouteParam(): void {
    this.projectName = this.route.snapshot.paramMap.get('name')
    // console.log(this.projectName)
  }

  private setBackgroundImage() : any {
    var style = {
      'background' : 'url(' + this.currentContent.content.image + ')'
    }

    return style;
  }

  // To be run on init
  ngOnInit() {

    // console.log(this.route.url)

    // Get the route parameter
    this.getRouteParam();

    // Set the title for the view dynamically
    this.title.setTitle('Mauricio_Paez | ' + this.projectName)

    // Sets the page's content. This needs to be replaced with its won dedicated call to the db for content.
    this.viewContentService.setPageContent(this.projectName)

  }

}