import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NavBarItems } from '../navbar/navbar'

@Injectable()
export class ViewContentService {

  private ITEMS = [
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
    },
    {
      title: 'Portfolio',
      links: [
        'Home',
        'Projects',
        'About',
        'Contact'
      ],
      icons: [
        "devicon-html5-plain-wordmark",
        "devicon-css3-plain-wordmark",
        "devicon-sass-original",
        "devicon-angularjs-plain",
        "devicon-express-original-wordmark",
        "devicon-nodejs-plain",
        "devicon-heroku-plain"
      ],
      image: '../assets/IMG_0307.jpg',
      description: "This website is the first project I've taken on, at least on the Web Development front. It is designed with simplicity in mind following most of the concepts I have learned on Codecademy's HTML, CSS, SASS, and AngularJS tracks. Of course, this site is entirely over engineered to showcase some skills.",
      source: 'https://github.com/cornopaez/cornopaez.github.io',
      footer: 'Made by: Mauricio Páez - Pittsburgh 2017'
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