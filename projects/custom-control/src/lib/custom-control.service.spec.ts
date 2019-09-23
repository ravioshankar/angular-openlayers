import { TestBed } from '@angular/core/testing';

import { CustomControlService } from './custom-control.service';

describe('CustomControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomControlService = TestBed.get(CustomControlService);
    expect(service).toBeTruthy();
  });
});
