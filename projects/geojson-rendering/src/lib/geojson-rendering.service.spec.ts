import { TestBed } from '@angular/core/testing';

import { GeojsonRenderingService } from './geojson-rendering.service';

describe('GeojsonRenderingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeojsonRenderingService = TestBed.get(GeojsonRenderingService);
    expect(service).toBeTruthy();
  });
});
