import { TestBed } from '@angular/core/testing';

import { CustomeventService } from './customevent.service';

describe('CustomeventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomeventService = TestBed.get(CustomeventService);
    expect(service).toBeTruthy();
  });
});
