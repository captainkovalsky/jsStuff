/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockItemsApiService } from './mock-items-api.service';

describe('MockItemsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockItemsApiService]
    });
  });

  it('should ...', inject([MockItemsApiService], (service: MockItemsApiService) => {
    expect(service).toBeTruthy();
  }));
});
