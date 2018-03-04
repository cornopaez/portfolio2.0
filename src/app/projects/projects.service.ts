import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json'
//   })
// };

@Injectable()
export class ProjectsService {

  constructor(
    private http: HttpClient
    ) { }

  // Get projects content
  getPageContent() : Observable<any> {

    return this.http.get('http://localhost:3000/data/projects')

  }
}
