import { Injectable, Inject, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { ProjectCard } from '../projects/project-card'
import { ContactSuccess } from '../contact/contact-success/contact-success'


@Injectable()
export class DatabaseService {

  getProjectsCardsUrl = '/data/projects'
  getProjectDetailsUrl = '/data/'
  submitContactFormUrl = '/data/contact'

  constructor(
    private http: HttpClient,
    private router: Router,
    @Optional() @Inject(APP_BASE_HREF) origin: string) {
      this.getProjectsCardsUrl = `${origin}${this.getProjectsCardsUrl}`;
      this.getProjectDetailsUrl = `${origin}${this.getProjectDetailsUrl}`;
      this.submitContactFormUrl = `${origin}${this.submitContactFormUrl}`;
  }

  /**
    Retrieves the data necessary from the database for the view.
    
    @return Observable<ProjectCard[]> - This function returns an Observable containing an array of ProjectCards.
                                        If the operation fails, it prints a user-friendly message in the browsers console
                                        and returns an empty array.
  */
  getProjectsCards() : Observable<ProjectCard[]> {
    return this.http.get<Array<ProjectCard>>(this.getProjectsCardsUrl)
    .pipe(
      retry(3),
      catchError(this.handleError('getProjectsCards',[]))
    )
  }

  /**
    Retrieves the details of a specific project

    @param name - The name of the project to be fetched.
    @return Observable<ProjectDetails> - Returns an observable of type ProjectDetails is operations succeeds.
                                          Otherwise, the function prints a user-friendly message to the browser's console and
                                          returns a null observable

  */
  getProjectDetails(name: string) : Observable<any> {
    let url = this.getProjectDetailsUrl + name
    return this.http.get(url)
      .pipe(
        retry(3),
        catchError(this.handleError('getProjectDetails', null))
      );
  }

  /**
    Submit the information populated in the form to the database

    @param contactInformation - The data populated in the form. The data must be of type Message
    @return Observable<Message> - The function returns an Observable of type Message if the operation succeeds.
                                  Otherwise, the function prints a user-friendly message to the browser's console and
                                  returns a null observable.
  */
  submitContactForm(contactInformation) : Observable<ContactSuccess> {
    let url = this.submitContactFormUrl
    return this.http.post<ContactSuccess>(url, contactInformation)
      .pipe(
        retry(3),
        catchError(this.handleError('submitContactForm', null))
      );
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
      console.error(JSON.stringify(error)); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`Could not perform the action requested. Specifically, ${operation}() failed: ${error.message}.`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
