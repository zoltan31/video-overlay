import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuctionService } from './auction.service';

describe('AuctionService', () => {
  let service: AuctionService;

  beforeEach( async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(AuctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
