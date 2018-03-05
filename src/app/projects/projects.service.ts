import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

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
