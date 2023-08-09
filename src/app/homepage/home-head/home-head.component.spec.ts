import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCircleComponent } from './home-head.component';

describe('HomeCircleComponent', () => {
  let component: HomeCircleComponent;
  let fixture: ComponentFixture<HomeCircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCircleComponent]
    });
    fixture = TestBed.createComponent(HomeCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
