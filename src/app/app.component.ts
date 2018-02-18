import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { ProjectsComponent } from './projects/projects.component'
import { ViewContentService } from './shared/view-content.service';
// import { NavBarItems } from './navbar/navbar'
// import { NavBarComponent } from './navbar/navbar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  private currentContent;

  constructor(
    private viewContentService : ViewContentService,
    private title : Title
    ) {

    viewContentService.currentPageContentItems$.subscribe(content => {
      this.currentContent = content
    })
  }

  ngOnInit(){
    console.log(this.currentContent)
  }
}
