import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
 
import { DatabaseService } from '../shared/database.service'
import { ProjectCard } from './project-card'
 
@Injectable()
export class ProjectsResolver implements Resolve<ProjectCard[]> {
  constructor(
    private dbs: DatabaseService,
    private router: Router
    ) {}

  /**
    This function fetches the data necessary for the Projects view prior to activating the route.

    @param route - State of the current route (from @angular/router)
    @param state - State of the current router (from @angular/router)
    @return ProjectCard[] - The function returns an observable of type array full of Projects using the 
                            unified service. If the projects are returned from the db, it returns them.
                            Otherwise, it prints a user-friendly error in the browser's console
                            and redirects the user to the unified Error view.
  */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<ProjectCard[]> {

    return this.dbs.getProjectsCards().map(data => {
      if (data.length > 0) {
        return data
      } else {
        this.router.navigate(['/Error'])
        return []
      }
    })
  }
}