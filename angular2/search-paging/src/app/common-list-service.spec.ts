/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommonListService } from './common-list-service';

describe('CommonListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonListService]
    });
  });

  it('should ...', inject([CommonListService], (service: CommonListService) => {
    expect(service).toBeTruthy();
  }));
});
