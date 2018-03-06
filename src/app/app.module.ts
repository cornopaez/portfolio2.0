import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule }   from './routes.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsDetailsComponent } from './projects/project_details/project-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsService } from './projects/projects.service';
import { ProjectDetailsService } from './projects/project_details/project-details.service';
import { ProjectsResolver } from './projects/projects-resolver.component'
import { ProjectDetailResolver } from './projects/project_details/project-details-resolver.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component'


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsDetailsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    Title,
    // ViewContentService,
    ProjectsService,
    ProjectDetailsService,
    ProjectsResolver,
    ProjectDetailResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
