import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocketIoModule } from 'ngx-socket-io';
import { Observable, of } from 'rxjs';
import { socketConfig } from 'src/utils/socket-config';
import { Auction } from '../auction';
import { AuctionService } from '../auction.service';

import { LicitNameComponent } from './licit-name.component';

class AuctionStubService {
  getAuction(): Observable<Auction> {
    return of({
      name: "TEST",
      price: 0,
      licit: 0,
    });
  }
}

describe('LicitNameComponent', () => {
  let component: LicitNameComponent;
  let fixture: ComponentFixture<LicitNameComponent>;
  let auctionServiceStub: AuctionStubService = new AuctionStubService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SocketIoModule.forRoot(socketConfig)
      ],
      declarations: [ LicitNameComponent ],
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
    fixture = TestBed.createComponent(LicitNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("name should be TEST", () => {
    expect(component.auctionName).toBe("TEST");
  });
});
