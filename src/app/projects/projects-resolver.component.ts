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