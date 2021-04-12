import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocketIoModule } from 'ngx-socket-io';
import { socketConfig } from 'src/utils/socket-config';

import { UserActivitiesComponent } from './user-activities.component';

describe('UserActivitiesComponent', () => {
  let component: UserActivitiesComponent;
  let fixture: ComponentFixture<UserActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SocketIoModule.forRoot(socketConfig)
      ],
      declarations: [ UserActivitiesComponent ]
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
});
