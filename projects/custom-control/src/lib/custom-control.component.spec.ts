import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomControlComponent } from './custom-control.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

describe('CustomControlComponent', () => {
  let component: CustomControlComponent;
  let fixture: ComponentFixture<CustomControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, YouTubePlayerModule],
      declarations: [ CustomControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.youtubeUrl = 'https://test.url';
    expect(component).toBeTruthy();
  });
});
