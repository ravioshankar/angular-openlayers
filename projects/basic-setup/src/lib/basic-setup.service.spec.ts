import { TestBed } from '@angular/core/testing';

import { BasicSetupService } from './basic-setup.service';

describe('BasicSetupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicSetupService = TestBed.get(BasicSetupService);
    expect(service).toBeTruthy();
  });
});
