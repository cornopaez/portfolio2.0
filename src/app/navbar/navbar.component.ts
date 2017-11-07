import { Component, Input } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { NavBarItems } from './navbar'

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html'
})

export class NavBarComponent {
  @Input() view: NavBarItems
}
