import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component'
import { NavBarItems } from './navbar/navbar'
import { NavBarComponent } from './navbar/navbar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  private currentItems = null;
  // private arrayClass : string;

  constructor(
    // private viewContentService : ViewContentService,
    private router : Router
    ) { }

  ngOnInit() {
    console.log(this.router.url)
  }
}
