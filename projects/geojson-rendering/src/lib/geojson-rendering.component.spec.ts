import { YouTubePlayerModule } from '@angular/youtube-player';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeojsonRenderingComponent } from './geojson-rendering.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GeojsonRenderingComponent', () => {
  let component: GeojsonRenderingComponent;
  let fixture: ComponentFixture<GeojsonRenderingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, YouTubePlayerModule],
      declarations: [ GeojsonRenderingComponent,  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeojsonRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.youtubeUrl = 'https://test.url';
    expect(component).toBeTruthy();
  });
});
