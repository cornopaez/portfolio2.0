import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ContactFormService } from './contact-form.service'
import { Message } from './message'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {

  contactForm : FormGroup

  constructor(
    private fb: FormBuilder,
    private cfs: ContactFormService,
    private router : Router
    ) {
    this.createForm()
  }

  // This function created the reactive
  private createForm(){
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      urgent: [false],
      recaptcha: [null, Validators.required]
    })
  }

  // This form is run when the form is submitted
  onSubmit() {
    this.cfs.submitContactForm(this.contactForm.value).subscribe(data => {
      console.log(data)
    })
  }

  ngOnInit() {
  }

}
