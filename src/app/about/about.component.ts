import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ViewContentService } from '../shared/view-content.service';

@Component({
  templateUrl: './about.component.html'
})

export class AboutComponent {
  private currentContent;
  private currentRoute;
  private currentExperience;
  private currentEducation;

  constructor(
    private viewContentService : ViewContentService,
    private title : Title,
    private router : Router
    ) {

    viewContentService.currentPageContentItems$.subscribe(content => {
      this.currentContent = content
    })
  }

  ngOnInit(){
    // Get the content for the appropriate view
    this.currentRoute = this.router.url.slice(1)
    this.viewContentService.setPageContent(this.currentRoute)

    // Set the title for this view
    this.title.setTitle(this.currentContent.view_title)
    // console.log(this.currentContent)
  }
}