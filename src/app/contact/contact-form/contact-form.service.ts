import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

  submitContactForm(contactInformation) {
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
      this.router.navigate(['/Error'])
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      this.router.navigate(['/Error'])
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };
}
