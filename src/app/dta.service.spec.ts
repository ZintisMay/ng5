import { TestBed, inject } from '@angular/core/testing';

import { DtaService } from './dta.service';

describe('DtaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DtaService]
    });
  });

  it('should be created', inject([DtaService], (service: DtaService) => {
    expect(service).toBeTruthy();
  }));
});
