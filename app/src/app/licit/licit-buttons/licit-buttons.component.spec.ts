import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocketIoModule } from 'ngx-socket-io';
import { Observable, of } from 'rxjs';
import { socketConfig } from 'src/utils/socket-config';
import { AuctionService } from '../auction.service';

import { LicitButtonsComponent } from './licit-buttons.component';


describe('LicitButtonsComponent', () => {
  let component: LicitButtonsComponent;
  let fixture: ComponentFixture<LicitButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SocketIoModule.forRoot(socketConfig)
      ],
      declarations: [ LicitButtonsComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicitButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be increased by 200', () => {
    expect(component.raiseAmount).toBe(100);
    component.increase();
    component.increase();
    expect(component.raiseAmount).toBe(300);
  })

  it('should not go lower than 100', () => {
    expect(component.raiseAmount).toBe(100);
    component.decrease();
    expect(component.raiseAmount).toBe(100);
  })
});
