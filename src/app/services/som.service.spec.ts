import { TestBed } from '@angular/core/testing';

import { SomService } from './som.service';

describe('SomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SomService = TestBed.get(SomService);
    expect(service).toBeTruthy();
  });
});
