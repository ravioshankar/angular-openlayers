import { TestBed } from '@angular/core/testing';

import { AngularOpenlayersIIService } from './angular-openlayers-ii.service';

describe('AngularOpenlayersIIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularOpenlayersIIService = TestBed.get(AngularOpenlayersIIService);
    expect(service).toBeTruthy();
  });
});
