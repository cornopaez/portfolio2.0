import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { NavBarItems } from './navbar'
import { NavbarService } from '../shared/navbar.service'

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html'
})

export class NavBarComponent {

  private currentItems : NavBarItems = null;

  constructor(private NavbarService : NavbarService) {
    NavbarService.currentNavbarItems$.subscribe(items => {
      this.currentItems = items;
    });
  }

  setNavbar(route: string) {
    this.NavbarService.setNavbarItems(route);
  }

}
