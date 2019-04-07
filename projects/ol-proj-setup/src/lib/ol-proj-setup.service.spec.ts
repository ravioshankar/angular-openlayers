import { TestBed } from '@angular/core/testing';

import { AngularOpenlayersIIService } from './ol-proj-setup.service';

describe('AngularOpenlayersIIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularOpenlayersIIService = TestBed.get(AngularOpenlayersIIService);
    expect(service).toBeTruthy();
  });
});
