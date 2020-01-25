import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusteredFeaturesComponent } from './clustered-features.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { YouTubePlayerModule } from '@angular/youtube-player';

describe('ClusteredFeaturesComponent', () => {
  let component: ClusteredFeaturesComponent;
  let fixture: ComponentFixture<ClusteredFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, YouTubePlayerModule],
      declarations: [ ClusteredFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusteredFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
