import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ReadMeService } from './read-me.service';

describe('ReadMeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ReadMeService]
  }));

  it('should be created', () => {
    const service: ReadMeService = TestBed.get(ReadMeService);
    expect(service).toBeTruthy();
  });
});
