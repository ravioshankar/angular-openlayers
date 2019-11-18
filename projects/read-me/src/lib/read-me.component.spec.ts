import { ReadMeService } from './read-me.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMeComponent } from './read-me.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ReadMeComponent', () => {
  let component: ReadMeComponent;
  let fixture: ComponentFixture<ReadMeComponent>;
  let service: ReadMeService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ReadMeComponent ],
      providers: [ReadMeService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(ReadMeService);
  });

  // it('should create', () => {
    // component.youtubeUrl = 'https://test.url';
    // service.embed('https://www.youtube.com/watch?v=WQFjZymnF3M');
    // expect(component).toBeTruthy();
  // });
});
