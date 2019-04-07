import { TestBed } from '@angular/core/testing';

import { SimplePopupService } from './simple-popup.service';

describe('SimplePopupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimplePopupService = TestBed.get(SimplePopupService);
    expect(service).toBeTruthy();
  });
});
