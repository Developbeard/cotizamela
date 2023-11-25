
import { TestBed } from '@angular/core/testing';

import { QuotesListService } from './quotes-list.service';

describe('QuotesListService', () => {

  let service: QuotesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
