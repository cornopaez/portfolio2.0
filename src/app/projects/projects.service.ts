import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';

import { ProjectCard } from './project-card'

@Injectable()
export class ProjectsService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  /**
    Retrieves the data necessary from the database for the view.
    
    @return Observable<ProjectCard[]> - This function returns an Observable containing an array of ProjectCards.
                                        If the operation fails, it prints a user-friendly message in the browsers console
                                        and returns an empty array.
  */
  getPageContent() : Observable<ProjectCard[]> {
    return this.http.get<Array<ProjectCard>>('/data/projects')
    .pipe(
      retry(3),
      catchError(this.handleError('getPageContent',[]))
    )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`Could not get the projects. Specifically, ${operation}() failed: ${error.message}.`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
