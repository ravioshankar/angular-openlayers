import { DocsModule } from './../../../docs/src/lib/docs.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSetupComponent } from './basic-setup.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BasicSetupComponent', () => {
  let component: BasicSetupComponent;
  let fixture: ComponentFixture<BasicSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, YouTubePlayerModule, DocsModule],
      declarations: [ BasicSetupComponent,  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.youtubeUrl = 'https://test.url';
    expect(component).toBeTruthy();
  });
});
