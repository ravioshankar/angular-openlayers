import { TestBed } from '@angular/core/testing';

import { DocsService } from './docs.service';

describe('DocsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocsService = TestBed.get(DocsService);
    expect(service).toBeTruthy();
  });
});
