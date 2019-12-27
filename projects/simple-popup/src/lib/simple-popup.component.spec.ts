import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePopupComponent } from './simple-popup.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

describe('SimplePopupComponent', () => {
  let component: SimplePopupComponent;
  let fixture: ComponentFixture<SimplePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, YouTubePlayerModule],
      declarations: [ SimplePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.youtubeUrl = 'https://test.url';
    expect(component).toBeTruthy();
  });
});
