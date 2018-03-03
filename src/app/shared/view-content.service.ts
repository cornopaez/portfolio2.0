import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
// import { NavBarItems } from '../navbar/navbar'

@Injectable()
export class ViewContentService {

  // Observable NavBarItems source
  private currentPageContentSource = new Subject<any>();

  constructor(
    private http : HttpClient
    ){}

  // Observable NavBarItems stream
  currentPageContentItems$ = this.currentPageContentSource.asObservable();

  // Set navbar contents
  setPageContent(route: string) {

    // Get contents for page from server
    var response = this.http.get('/localhost:3000/data/' + route)

    this.http.get('http://localhost:3000/data/' + route).subscribe(content => {
      console.log(content)
    })

    // Define the data source
    // this.currentPageContentSource.next(this.ITEMS.find(findItem))
    this.currentPageContentSource.next(response[0])

  }

}