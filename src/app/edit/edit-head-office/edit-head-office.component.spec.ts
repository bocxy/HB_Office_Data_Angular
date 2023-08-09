import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeadOfficeComponent } from './edit-head-office.component';

describe('EditHeadOfficeComponent', () => {
  let component: EditHeadOfficeComponent;
  let fixture: ComponentFixture<EditHeadOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHeadOfficeComponent]
    });
    fixture = TestBed.createComponent(EditHeadOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
