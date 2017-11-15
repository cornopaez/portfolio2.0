import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { NavBarItems } from './navbar'
import { ViewContentService } from '../shared/view-content.service'

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html'
})

export class NavBarComponent {

  private currentItems : NavBarItems = null;
  private arrayClass : string;

  constructor(private viewContentService : ViewContentService) {
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

  setNavbar(route: string) {
    this.viewContentService.setNavbarItems(route);
  }

}
