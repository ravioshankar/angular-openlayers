import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMarkersComponent } from './custom-markers.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

describe('CustomMarkersComponent', () => {
  let component: CustomMarkersComponent;
  let fixture: ComponentFixture<CustomMarkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, YouTubePlayerModule],
      declarations: [ CustomMarkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.youtubeUrl = 'https://test.url';
    expect(component).toBeTruthy();
  });
});
