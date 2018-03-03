import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { ViewContent } from '../shared/view-content';
// import { NavBarItems } from '../navbar/navbar'

@Injectable()
export class ViewContentService {

  // Observable PageContentItems source
  private currentPageContentSource = new Subject<ViewContent>();

  constructor(
    private http : HttpClient
    ){}

  // Observable NavBarItems stream
  currentPageContentItems$ = this.currentPageContentSource.asObservable();

  // Set navbar contents
  setPageContent(route: string) {

    this.http.get('http://localhost:3000/data/' + route).subscribe(content => {
      // console.log(content)
      this.currentPageContentSource.next(content[0])
    })
  }

}