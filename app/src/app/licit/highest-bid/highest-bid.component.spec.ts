import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocketIoModule } from 'ngx-socket-io';
import { Observable, of } from 'rxjs';
import { socketConfig } from 'src/utils/socket-config';
import { AuctionService } from '../auction.service';

import { HighestBidComponent } from './highest-bid.component';

class AuctionStubService {
  getAuction(): Observable<{price: number}> {
    return of({
      price: 100
    });
  }

  getHighestBid(): Observable<number> {
    return of(800)  
  }
}

describe('HighestBidComponent', () => {
  let component: HighestBidComponent;
  let fixture: ComponentFixture<HighestBidComponent>;
  let auctionServiceStub: AuctionStubService = new AuctionStubService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SocketIoModule.forRoot(socketConfig)
      ],
      declarations: [ HighestBidComponent ],
      providers: [
        {
          provide: AuctionService,
          useValue: auctionServiceStub
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be 800', () => {
    expect(component.highestBid).toBe(800);
  })
});
