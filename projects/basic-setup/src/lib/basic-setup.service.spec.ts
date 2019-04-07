import { TestBed } from '@angular/core/testing';

import { AngularOpenlayersIService } from './basic-setup.service';

describe('AngularOpenlayersIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularOpenlayersIService = TestBed.get(AngularOpenlayersIService);
    expect(service).toBeTruthy();
  });
});
