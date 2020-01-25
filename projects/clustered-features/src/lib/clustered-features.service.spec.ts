import { TestBed } from '@angular/core/testing';

import { ClusteredFeaturesService } from './clustered-features.service';

describe('ClusteredFeaturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClusteredFeaturesService = TestBed.get(ClusteredFeaturesService);
    expect(service).toBeTruthy();
  });
});
