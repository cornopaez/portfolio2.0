import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { DatabaseService } from './shared/database.service';
import { ProjectsResolver } from './projects/projects-resolver.component';
import { ProjectDetailResolver } from './projects/project_details/project-details-resolver.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  providers: [
    // Title,
    ProjectsResolver,
    ProjectDetailResolver,
    DatabaseService
    // DialogService,
    // CanDeactivateGuard
  ],
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}