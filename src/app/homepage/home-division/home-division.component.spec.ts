import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDivisionComponent } from './home-division.component';

describe('HomeDivisionComponent', () => {
  let component: HomeDivisionComponent;
  let fixture: ComponentFixture<HomeDivisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDivisionComponent]
    });
    fixture = TestBed.createComponent(HomeDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
