import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHeadOfficeComponent } from './view-head-office.component';

describe('ViewHeadOfficeComponent', () => {
  let component: ViewHeadOfficeComponent;
  let fixture: ComponentFixture<ViewHeadOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewHeadOfficeComponent]
    });
    fixture = TestBed.createComponent(ViewHeadOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
