import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DialogService }  from '../../shared/dialog.service';

import { DatabaseService } from '../../shared/database.service'
import { Message } from './message'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {

  contactForm : FormGroup
  formSent : boolean

  constructor(
    private fb: FormBuilder,
    private dbs: DatabaseService,
    private router : Router,
    private ds: DialogService
    ) {
    this.createForm()
  }

  /**
    This function creates the reactive form used in this view.
    It creates 5 fields and defines its validators.
  */
  private createForm(){
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      urgent: [false],
      recaptcha: [null, Validators.required]
    })
  }

  /**
    This function runs when the submit button is pressed in the form.
    It submits the value of the form and expects a result from the db.
    If a result is returned, it redirects the user to the FormSuccess view.
    Otherwise, it redirects the user the unified Error view and it prints a 
    user-friendly error in the browser's console.
  */
  onSubmit() {
    this.formSent = true

    this.dbs.submitContactForm(this.contactForm.value).subscribe(
      data => {
        if (data) {
          this.router.navigate(['/Contact/FormSuccess'])
        } else {
          this.router.navigate(['/Error'])
        }
        
      },
      error => {
        this.router.navigate(['/Error'])
      }
    )
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if form is empty or unchanged
    if (!this.contactForm.dirty || this.contactForm.pristine || this.formSent) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.ds.confirm('Are you sure you want to discard changes?');
  }

  ngOnInit() {
  }

}
