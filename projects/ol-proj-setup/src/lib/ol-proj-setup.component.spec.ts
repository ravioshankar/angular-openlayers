import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlProjSetupComponent } from './ol-proj-setup.component';

describe('OlProjSetupComponent', () => {
  let component: OlProjSetupComponent;
  let fixture: ComponentFixture<OlProjSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    expect(component).toBeTruthy();
  });
});
