import { TestBed } from '@angular/core/testing';

import { AngularOpenlayersIIIService } from './angular-openlayers-iii.service';

describe('AngularOpenlayersIIIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularOpenlayersIIIService = TestBed.get(AngularOpenlayersIIIService);
    expect(service).toBeTruthy();
  });
});
