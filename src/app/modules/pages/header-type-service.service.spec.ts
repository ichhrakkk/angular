import { TestBed } from '@angular/core/testing';

import { HeaderTypeServiceService } from './header-type-service.service';

describe('HeaderTypeServiceService', () => {
  let service: HeaderTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
