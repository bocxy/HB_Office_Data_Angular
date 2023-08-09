import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDivisionOfficeComponent } from './view-division-office.component';

describe('ViewDivisionOfficeComponent', () => {
  let component: ViewDivisionOfficeComponent;
  let fixture: ComponentFixture<ViewDivisionOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDivisionOfficeComponent]
    });
    fixture = TestBed.createComponent(ViewDivisionOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
