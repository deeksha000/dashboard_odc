import { TestBed } from '@angular/core/testing';

import { OdcService } from './odc.service';

describe('OdcService', () => {
  let service: OdcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
