import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take'
import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
 
 import { ProjectDetailsService } from './project-details.service'
// import { Crisis, CrisisService }  from './crisis.service';
 
@Injectable()
export class ProjectDetailResolver implements Resolve<any> {
  constructor(
    private pds:  ProjectDetailsService,
    private router: Router
    ) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
    // Get the project name from route
    var projectName = route.paramMap.get('name')

    // Return project data only if data is found in db, otherwise go to /Projects
    return this.pds.getProjectDetails(projectName).take(1).map(project => {
      if (project.length === 1) {
        return project;
      } else {
        this.router.navigate(['/Projects']);
        return null;
      }
    })
  }
}