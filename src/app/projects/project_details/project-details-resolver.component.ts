import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take'
import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
 
import { DatabaseService } from '../../shared/database.service'
import { ProjectDetails } from './project-details'

 
@Injectable()
export class ProjectDetailResolver implements Resolve<ProjectDetails> {
  constructor(
    private dbs: DatabaseService,
    private router: Router
    ) {}
 
  /**
    This function fetches the data necessary for the Project Details view prior to activating the route.

    @param route - State of the current route (from @angular/router)
    @param state - State of the current router (from @angular/router)
    @return Observable<ProjectDetails> - The function returns an observable of type ProjectDetails using the 
                                          unified service. If the details are found in the db, ir returns the details found.
                                          Otherwise, it prints a user-friendly error in the browser's console
                                          and redirects the user to the main Projects listing
  */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<ProjectDetails> {
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