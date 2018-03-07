import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Message } from './message'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {

  message = new Message()

  contactForm : FormGroup

  constructor(
    private fb: FormBuilder
    ) {
    this.createForm()
  }

  private createForm(){
    this.contactForm = this.fb.group({
      name: [
        '', 
        Validators.required
      ],
      email: 
        ['', 
          [
            Validators.required, 
            Validators.email
          ]
        ],
      message: [
        '',
        Validators.required
      ],
      urgent: [
        false
      ]
    })
  }

  ngOnInit() {
  }

}
