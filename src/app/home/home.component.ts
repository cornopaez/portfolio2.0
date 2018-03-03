import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ViewContentService } from '../shared/view-content.service';
import { ViewContent } from '../shared/view-content';

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  private currentContent : ViewContent;
  private currentRoute : string;

  constructor(
    private viewContentService : ViewContentService,
    private title : Title,
    private router : Router
    ) {

    viewContentService.currentPageContentItems$.subscribe(content => {
      this.currentContent = content

      // Set title for the view
      this.title.setTitle(content.view_title)
    })
  }

  ngOnInit(){
    // Get the content for the appropriate view
    this.currentRoute = 'Home'
    this.viewContentService.setPageContent(this.currentRoute)
  }
}