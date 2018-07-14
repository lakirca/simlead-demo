import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDirectionsComponent } from './main-directions.component';

describe('MainDirectionsComponent', () => {
  let component: MainDirectionsComponent;
  let fixture: ComponentFixture<MainDirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
