import { TestBed } from '@angular/core/testing';

import { CartolaService } from './cartola.service';

describe('CarotalServiceService', () => {
  let service: CartolaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartolaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
