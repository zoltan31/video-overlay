import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SocketIoModule } from 'ngx-socket-io';
import { socketConfig } from 'src/utils/socket-config';
import { LicitComponent } from './licit/licit.component';
import { HighestBidComponent } from './licit/highest-bid/highest-bid.component';
import { LicitButtonsComponent } from './licit/licit-buttons/licit-buttons.component';
import { LicitNameComponent } from './licit/licit-name/licit-name.component';
import { RaiseBidComponent } from './licit/raise-bid/raise-bid.component';
import { TimerComponent } from './licit/timer/timer.component';
import { UserActivitiesComponent } from './licit/user-activities/user-activities.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        SocketIoModule.forRoot(socketConfig),
      ],
      declarations: [
        AppComponent,
        LicitComponent,
        LicitButtonsComponent,
        HighestBidComponent,
        LicitNameComponent,
        UserActivitiesComponent,
        TimerComponent,
        RaiseBidComponent,
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app');
  });
});
