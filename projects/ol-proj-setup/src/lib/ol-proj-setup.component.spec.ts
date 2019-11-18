import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReadMeComponent } from './../../../read-me/src/lib/read-me.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlProjSetupComponent } from './ol-proj-setup.component';

describe('OlProjSetupComponent', () => {
  let component: OlProjSetupComponent;
  let fixture: ComponentFixture<OlProjSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ OlProjSetupComponent,
      ReadMeComponent ]
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
