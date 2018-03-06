import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsResolver } from './projects/projects-resolver.component';
import { ProjectsDetailsComponent } from './projects/project_details/project-details.component';
import { ProjectsHomeComponent } from './projects/projects-home/projects-home.component';
import { ProjectDetailResolver } from './projects/project_details/project-details-resolver.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component'
import { ContactHomeComponent } from './contact/contact-home/contact-home.component'


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'Projects', 
    component: ProjectsComponent,
    children: [
      {
        path: ':name',
        component: ProjectsDetailsComponent,
        resolve: {
          project: ProjectDetailResolver
        }
      },
      {
        path: '',
        component: ProjectsHomeComponent,
        resolve: {
          projects: ProjectsResolver
        },
      }
    ]
  },
  { 
    path: 'About', 
    component: AboutComponent 
  },
  { 
    path: 'Contact',
    component: ContactComponent,
    children: [
      {
        path: 'form',
        component: ContactFormComponent
      },
      {
        path: '',
        component: ContactHomeComponent
      }
    ]
  },
  { 
    path: 'Home', 
    redirectTo: '', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}