import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }   from './routes.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NavBarComponent } from './navbar/navbar.component';
import { ViewContentService } from './shared/view-content.service'
import { ProjectsDetailsComponent } from './projects/project_details/project-details.component'


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavBarComponent,
    ProjectsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title,
    ViewContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
