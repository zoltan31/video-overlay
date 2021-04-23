import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocketIoModule } from 'ngx-socket-io';
import { Observable, of, Subscriber } from 'rxjs';
import { socketConfig } from 'src/utils/socket-config';
import { AuctionService } from '../auction.service';

import { UserActivitiesComponent } from './user-activities.component';

class AuctionStubService {
  getBidEvent(): Observable<string>{
    return new Observable<string>(subscriber => {
      subscriber.next("44 made bid: +100$");
      subscriber.next("44 made bid: +200$");
      subscriber.next("48 made bid: +300$");
      subscriber.complete();
    })
  }
  getUserConnection(): Observable<string> {
    return of("user A");
  }
}

describe('UserActivitiesComponent', () => {
  let component: UserActivitiesComponent;
  let fixture: ComponentFixture<UserActivitiesComponent>;
  let auctionServiceStub: AuctionStubService = new AuctionStubService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SocketIoModule.forRoot(socketConfig)
      ],
      declarations: [ UserActivitiesComponent ],
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
    fixture = TestBed.createComponent(UserActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 3 elements', () => {
    expect(component.licitEvents.length).toBe(4);
  })

  it('should contain last added element as first element', () => {
    expect(component.licitEvents[1]).toBe("48 made bid: +300$");
  })
});
