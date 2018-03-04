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
import { ViewContentService } from './shared/view-content.service';
import { ProjectsService } from './projects/projects.service';
import { PtojectDetailsService } from './projects/project-dtails/ptoject-details.service';
import { ProjectDetailsService } from './projects/project_details/project-details.service';
// import { NavBarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsDetailsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
    // NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    Title,
    ViewContentService,
    ProjectsService,
    PtojectDetailsService,
    ProjectDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
