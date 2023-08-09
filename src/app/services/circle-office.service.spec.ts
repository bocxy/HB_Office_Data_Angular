import { TestBed } from '@angular/core/testing';

import { CircleOfficeService } from './circle-office.service';

describe('CircleOfficeService', () => {
  let service: CircleOfficeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircleOfficeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
