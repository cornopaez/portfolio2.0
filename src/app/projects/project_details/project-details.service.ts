import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectDetailsService {

  constructor(
    private http: HttpClient
    ) { }

  // Get projects content
  getProjectDetails(name: string) : Observable<any> {
    // console.log('ProjectDetailsService: The name of the projects is ' + name)
    return this.http.get('http://localhost:3000/data/' + name)
  }
}
