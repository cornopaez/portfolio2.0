import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component'
import { ViewContentService } from './shared/view-content.service';
// import { NavBarItems } from './navbar/navbar'
// import { NavBarComponent } from './navbar/navbar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  private currentContent;
  private currentRoute;

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
    // Get the content for the appropriate page
    this.router.url.length > 1 ? this.currentRoute = this.router.url.slice(1) : this.currentRoute = 'Home'
    this.viewContentService.setPageContent(this.currentRoute)
    // console.log(this.currentContent)
  }
}
