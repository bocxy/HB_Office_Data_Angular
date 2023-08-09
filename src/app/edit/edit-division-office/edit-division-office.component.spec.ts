import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDivisionOfficeComponent } from './edit-division-office.component';

describe('EditDivisionOfficeComponent', () => {
  let component: EditDivisionOfficeComponent;
  let fixture: ComponentFixture<EditDivisionOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDivisionOfficeComponent]
    });
    fixture = TestBed.createComponent(EditDivisionOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
