import { TestBed } from '@angular/core/testing';

import { Ppal } from './ppal';

describe('Ppal', () => {
  let service: Ppal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ppal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
