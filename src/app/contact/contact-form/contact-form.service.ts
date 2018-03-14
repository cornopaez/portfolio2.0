import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Message } from './message'

@Injectable()
export class ContactFormService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  /**
    Submit the information populated in the form to the database

    @param contactInformation - The data populated in the form. The data must be of type Message
    @return Observable<Message> - The function returns an Observable of type Message if the operation succeeds.
                                  Otherwise, the function prints a user-friendly message to the browser's console and
                                  returns an empty observable.
  */
  submitContactForm(contactInformation) : Observable<Message> {
    let url = '/data/contact'
    return this.http.post<Message>(url, contactInformation)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  // Error Handling
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}. Looks like the contact request was not sent. Please try again later. `);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };
}
