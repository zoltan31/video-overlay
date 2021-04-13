import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuctionService } from './auction.service';
import { SocketIoModule } from 'ngx-socket-io';
import { socketConfig } from 'src/utils/socket-config';

describe('AuctionService', () => {
  let service: AuctionService;

  beforeEach( async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SocketIoModule.forRoot(socketConfig)
      ]
    });
    service = TestBed.inject(AuctionService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
