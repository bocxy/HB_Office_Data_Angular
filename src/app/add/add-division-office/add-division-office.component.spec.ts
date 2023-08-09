import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDivisionOfficeComponent } from './add-division-office.component';

describe('AddDivisionOfficeComponent', () => {
  let component: AddDivisionOfficeComponent;
  let fixture: ComponentFixture<AddDivisionOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDivisionOfficeComponent]
    });
    fixture = TestBed.createComponent(AddDivisionOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
