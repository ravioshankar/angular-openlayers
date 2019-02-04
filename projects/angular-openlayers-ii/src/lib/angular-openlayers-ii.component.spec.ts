import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularOpenlayersIIComponent } from './angular-openlayers-ii.component';

describe('AngularOpenlayersIIComponent', () => {
  let component: AngularOpenlayersIIComponent;
  let fixture: ComponentFixture<AngularOpenlayersIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularOpenlayersIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularOpenlayersIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
