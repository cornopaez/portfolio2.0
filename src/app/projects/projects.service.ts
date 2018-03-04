import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ProjectsService {

  constructor(
    private http: HttpClient
    ) { }

  // Observable source
  private projectsContentSource = new Subject<any>();

  // Observable stream
  projectsContentItems$ = this.projectsContentSource.asObservable();

  // Set contents
  setPageContent() {

    // Get contents for page from server

    this.http.get('http://localhost:3000/data/projects').subscribe(content => {
      console.log(content)
    })

    // Define the data source
    // this.currentPageContentSource.next(this.ITEMS.find(findItem))
    // this.projectsContentSource.next(response[0])

  }
}
