import { TestBed } from '@angular/core/testing';

import { CustomMarkersService } from './ol-proj-setup.service';

describe('CustomMarkersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomMarkersService = TestBed.get(CustomMarkersService);
    expect(service).toBeTruthy();
  });
});
