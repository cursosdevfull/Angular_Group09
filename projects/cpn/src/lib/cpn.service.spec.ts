import { TestBed } from '@angular/core/testing';

import { CpnService } from './cpn.service';

describe('CpnService', () => {
  let service: CpnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
