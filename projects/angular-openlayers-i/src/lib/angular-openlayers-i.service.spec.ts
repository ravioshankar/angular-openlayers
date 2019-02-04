import { TestBed } from '@angular/core/testing';

import { AngularOpenlayersIService } from './angular-openlayers-i.service';

describe('AngularOpenlayersIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularOpenlayersIService = TestBed.get(AngularOpenlayersIService);
    expect(service).toBeTruthy();
  });
});
