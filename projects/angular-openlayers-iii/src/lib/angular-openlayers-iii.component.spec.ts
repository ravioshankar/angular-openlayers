import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularOpenlayersIIIComponent } from './angular-openlayers-iii.component';

describe('AngularOpenlayersIIIComponent', () => {
  let component: AngularOpenlayersIIIComponent;
  let fixture: ComponentFixture<AngularOpenlayersIIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularOpenlayersIIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularOpenlayersIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
