import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
// import { NavBarItems } from '../navbar/navbar'

@Injectable()
export class ViewContentService {

  private ITEMS = [
    {
      route: 'Home',
      view_title: 'Mauricio_Páez | Developer',
      content: {
        image: '../assets/close-up.png',
        description: 'I\'m the description for this page!' ,
        description_links: [
          'Projects',
          'About',
          'Contact'
        ]
      }
    },
    {
      route: 'Projects',
      view_title: 'Mauricio_Páez | Projects',
      navbar: {
        title: 'Projects',
        links: [
          'Home',
          'About',
          'Contact'
        ]
      }
    },
    {
      route: 'About',
      view_title: 'Mauricio_Páez | About',
      navbar: {
        title: 'About',
        links: [
          'Home',
          'Projects',
          'Contact'
        ]
      }
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
      route: 'Portfolio',
      view_title: 'Mauricio_Páez | Projects',
      navbar: {
        title: 'Portfolio',
        links: [
          'Home',
          'Projects',
          'About',
          'Contact'
        ],
      },
      content: {
        icons: [
          "devicon-html5-plain-wordmark",
          "devicon-css3-plain-wordmark",
          "devicon-sass-original",
          "devicon-angularjs-plain",
          "devicon-express-original-wordmark",
          "devicon-nodejs-plain",
          "devicon-heroku-plain"
        ],
        image: './assets/IMG_0307.png',
        description: "This website is the first project I've taken on, at least on the Web Development front. It is designed with simplicity in mind following most of the concepts I have learned on Codecademy's HTML, CSS, SASS, and AngularJS tracks. Of course, this site is entirely over engineered to showcase some skills.",
        source: 'https://github.com/cornopaez/cornopaez.github.io',
        footer: 'Made by: Mauricio Páez - Pittsburgh 2017',
        // description_links: array
      }
    }
  ]

  // Observable NavBarItems source
  private currentPageContentSource = new Subject<any>();
  // private currentPageItemsSource = new Subject<any>();
  // private currentNavbarItemsSource = new Subject<any>();

  // Observable NavBarItems stream
  currentPageContentItems$ = this.currentPageContentSource.asObservable();
  // currentPageItem$ = this.currentPageItemsSource.asObservable();

  // Set navbar contents
  setPageContent(route: string) {

    // Find items in array
    function findItem(item) {
      return item.route === route
    }

    // Define the data source
    this.currentPageContentSource.next(this.ITEMS.find(findItem))

    // console.log('NavbarService - setNavbarItems: The route is "' + route + '" and the current navbar items are: ' + this.currentNavbarItems$)
  }

}