import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCircleOfficeComponent } from './view-circle-office.component';

describe('ViewCircleOfficeComponent', () => {
  let component: ViewCircleOfficeComponent;
  let fixture: ComponentFixture<ViewCircleOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCircleOfficeComponent]
    });
    fixture = TestBed.createComponent(ViewCircleOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
