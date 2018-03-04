import { TestBed, inject } from '@angular/core/testing';

import { ProjectDetailsService } from './project-details.service';

describe('ProjectDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectDetailsService]
    });
  });

  it('should be created', inject([ProjectDetailsService], (service: ProjectDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
