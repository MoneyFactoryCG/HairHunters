import { TestBed } from '@angular/core/testing';

import { ObucheniyeService } from './obucheniye.service';

describe('ObucheniyeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObucheniyeService = TestBed.get(ObucheniyeService);
    expect(service).toBeTruthy();
  });
});
