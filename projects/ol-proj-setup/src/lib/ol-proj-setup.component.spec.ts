import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlProjSetupComponent } from './ol-proj-setup.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

describe('OlProjSetupComponent', () => {
  let component: OlProjSetupComponent;
  let fixture: ComponentFixture<OlProjSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, YouTubePlayerModule],
      declarations: [ OlProjSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlProjSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.youtubeUrl = 'https://youtube.test';
    expect(component).toBeTruthy();
  });
});
