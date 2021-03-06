// NG Imports
import { BrowserModule, Title } from '@angular/platform-browser'
import { NgModule, PLATFORM_ID, APP_ID, Inject } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule }   from '@angular/forms'
import { isPlatformBrowser } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';

// App imports
import { AppRoutingModule }   from './routes.component'
import { ProjectsComponent } from './projects/projects.component'
import { ProjectsDetailsComponent } from './projects/project_details/project-details.component'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { AppComponent } from './app.component'
import { ContactComponent } from './contact/contact.component'
import { ProjectsResolver } from './projects/projects-resolver.component'
import { ProjectDetailResolver } from './projects/project_details/project-details-resolver.component'
import { ContactFormComponent } from './contact/contact-form/contact-form.component'
import { ContactHomeComponent } from './contact/contact-home/contact-home.component'
import { ProjectsHomeComponent } from './projects/projects-home/projects-home.component'
import { ContactSuccessComponent } from './contact/contact-success/contact-success.component'
import { ErrorComponent } from './error/error.component';
import { DialogService } from './shared/dialog.service'
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service'


// reCaptcha imports
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { DatabaseService } from './shared/database.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsDetailsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ContactFormComponent,
    ContactHomeComponent,
    ProjectsHomeComponent,
    ContactSuccessComponent,
    ErrorComponent
  ],
  imports: [
    // BrowserModule.withServerTransition({ appId: 'Portfolio2.0' }),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule
  ],
  providers: [
    Title,
    ProjectsResolver,
    ProjectDetailResolver,
    DatabaseService,
    DialogService,
    CanDeactivateGuard
    // { provide: APP_BASE_HREF, useValue: 'http://www.cornopaez.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(
  //   @Inject(PLATFORM_ID) private platformId: Object,
  //   @Inject(APP_ID) private appId: string) {
  //   const platform = isPlatformBrowser(platformId) ?
  //     'in the browser' : 'on the server';
  //   console.log(`Running ${platform} with appId=${appId}`);
  // }
}
