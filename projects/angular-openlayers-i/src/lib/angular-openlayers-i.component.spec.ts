import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularOpenlayersIComponent } from './angular-openlayers-i.component';

describe('AngularOpenlayersIComponent', () => {
  let component: AngularOpenlayersIComponent;
  let fixture: ComponentFixture<AngularOpenlayersIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularOpenlayersIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularOpenlayersIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
