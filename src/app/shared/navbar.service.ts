import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NavBarItems } from '../navbar/navbar'

@Injectable()
export class NavbarService {

  private ITEMS : NavBarItems[] = [
    {
      title: 'Projects',
      links: [
        'Home',
        'About',
        'Contact'
      ]
    },
    {
      title: 'About',
      links: [
        'Home',
        'Projects',
        'Contact'
      ]
    },
    {
      title: 'Contact',
      links: [
        'Home',
        'Projects',
        'About'
      ]
    }
  ]

  // Observable NavBarItems source
  private currentNavbarItemsSource = new Subject<any>();
  private currentRoute : string = ''

  // Observable NavBarItems stream
  currentNavbarItems$ = this.currentNavbarItemsSource.asObservable();

  // Navbar Commands
  setNavbarItems(route: string) {

    // Set currentRoute
    this.currentRoute = route

    // Find items in array
    function findItem(item) {
      return item.title === route
    }

    // Define the data source
    this.currentNavbarItemsSource.next(this.ITEMS.find(findItem))

    // console.log('NavbarService - setNavbarItems: The route is "' + route + '" and the current navbar items are: ' + this.currentNavbarItems$)
  }

  getCurrentRoute() : string {
    return this.currentRoute;
  }
}