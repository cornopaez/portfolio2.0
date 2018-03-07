import { Component, OnInit } from '@angular/core';
import { Message } from './message'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {

  message = new Message()

  constructor() { }

  ngOnInit() {
  }

}
