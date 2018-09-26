import { TestBed, inject } from '@angular/core/testing';

import { SearchFilterTransferService } from './search-filter-transfer.service';

describe('SearchFilterTransferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchFilterTransferService]
    });
  });

  it('should be created', inject([SearchFilterTransferService], (service: SearchFilterTransferService) => {
    expect(service).toBeTruthy();
  }));
});
