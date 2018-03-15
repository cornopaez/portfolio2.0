import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take'
import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
 
import { DatabaseService } from '../../shared/database.service'

 
@Injectable()
export class ProjectDetailResolver implements Resolve<any> {
  constructor(
    private dbs: DatabaseService,
    private router: Router
    ) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
    // Get the project name from route
    var projectName = route.paramMap.get('name')

    return this.dbs.getProjectDetails(projectName).take(1).map(project => {
      if (project) {
        return project;
      } else {
        this.router.navigate(['/Projects']);
        return null;
      }
    })
  }
}