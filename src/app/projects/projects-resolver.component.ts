import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
 
 import { ProjectsService } from './projects.service'
// import { Crisis, CrisisService }  from './crisis.service';
 
@Injectable()
export class ProjectsResolver implements Resolve<any> {
  constructor(
    private ps:  ProjectsService,
    private router: Router
    ) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
 
    return this.ps.getPageContent()
  }
}