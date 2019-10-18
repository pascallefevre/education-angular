import { TestBed } from '@angular/core/testing';

import { CreneauService } from './creneau.service';

describe('CreneauService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreneauService = TestBed.get(CreneauService);
    expect(service).toBeTruthy();
  });
});
