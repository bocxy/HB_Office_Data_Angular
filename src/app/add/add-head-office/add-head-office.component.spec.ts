import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeadOfficeComponent } from './add-head-office.component';

describe('AddHeadOfficeComponent', () => {
  let component: AddHeadOfficeComponent;
  let fixture: ComponentFixture<AddHeadOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHeadOfficeComponent]
    });
    fixture = TestBed.createComponent(AddHeadOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
