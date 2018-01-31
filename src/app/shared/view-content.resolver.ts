import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { NavBarItems } from '../navbar/navbar'
import { ViewContentService } from './view-content.service';

@Injectable()
export class ViewContentResolve implements Resolve<NavBarItems> {

  constructor(
    private viewContentService: ViewContentService
  ) { }

  resolve() : Observable<any> {
    
    var temp;

    this.viewContentService.currentNavbarItems$.subscribe(items => {
       temp = items;
    })

    return temp;
  }
}