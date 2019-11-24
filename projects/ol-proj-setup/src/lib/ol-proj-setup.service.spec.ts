import { TestBed } from '@angular/core/testing';

import { OlProjSetupService } from './ol-proj-setup.service';

describe('OlProjSetupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OlProjSetupService = TestBed.get(OlProjSetupService);
    expect(service).toBeTruthy();
  });
});
