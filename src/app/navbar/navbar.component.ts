import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavBarItems } from './navbar'
import { ViewContentService } from '../shared/view-content.service'

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html'
})

export class NavBarComponent {

  private currentItems = null;
  private arrayClass : string;

  constructor(
    private viewContentService : ViewContentService,
    private router : Router
    ) {
      viewContentService.currentNavbarItems$.subscribe(items => {
        this.currentItems = items;
    });
  }


  // This function adds a class that defines the amount of comas in the array views
  public setArrayClass() : string {
    switch (this.currentItems.links.length) {
      case 3: {
        this.arrayClass = 'array-coma-2';
        break;
      }
      case 4: {
        this.arrayClass = 'array-coma-3';
        break;
      }
      default: {
        // Nothing happens
        break;
      }
    }

    // console.log(this.arrayClass);
    return this.arrayClass;
  }

  ngOnInit() {
    // console.log(this.router.url)
    console.log('navbar.component - currentItems: ' + this.currentItems)
  }

  // setNavbar(route: string) {
  //   this.viewContentService.setNavbarItems(route);
  // }

}
