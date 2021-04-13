import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocketIoModule } from 'ngx-socket-io';
import { socketConfig } from 'src/utils/socket-config';
import { HighestBidComponent } from './highest-bid/highest-bid.component';
import { LicitButtonsComponent } from './licit-buttons/licit-buttons.component';
import { LicitNameComponent } from './licit-name/licit-name.component';

import { LicitComponent } from './licit.component';
import { RaiseBidComponent } from './raise-bid/raise-bid.component';
import { TimerComponent } from './timer/timer.component';
import { UserActivitiesComponent } from './user-activities/user-activities.component';

describe('LicitComponent', () => {
  let component: LicitComponent;
  let fixture: ComponentFixture<LicitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        LicitComponent,
        LicitButtonsComponent,
        HighestBidComponent,
        LicitNameComponent,
        UserActivitiesComponent,
        TimerComponent,
        RaiseBidComponent,
      ],
      imports: [
        HttpClientModule,
        SocketIoModule.forRoot(socketConfig)
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
