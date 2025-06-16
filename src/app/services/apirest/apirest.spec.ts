import { TestBed } from '@angular/core/testing';

import { Apirest } from './apirest';

describe('Apirest', () => {
  let service: Apirest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apirest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
