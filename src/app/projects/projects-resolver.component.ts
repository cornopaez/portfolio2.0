import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
 
import { ProjectsService } from './projects.service'
import { ProjectCard } from './project-card'
 
@Injectable()
export class ProjectsResolver implements Resolve<ProjectCard[]> {
  constructor(
    private ps:  ProjectsService,
    private router: Router
    ) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<ProjectCard[]> {
 
    return this.ps.getPageContent().map(data => {
      if (data.length > 0) {
        return data
      } else {
        this.router.navigate(['/Error'])
        return []
      }
    })
  }
}