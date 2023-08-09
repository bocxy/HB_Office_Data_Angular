import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCircleOfficeComponent } from './add-circle-office.component';

describe('AddCircleOfficeComponent', () => {
  let component: AddCircleOfficeComponent;
  let fixture: ComponentFixture<AddCircleOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCircleOfficeComponent]
    });
    fixture = TestBed.createComponent(AddCircleOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
