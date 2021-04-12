import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocketIoModule } from 'ngx-socket-io';
import { socketConfig } from 'src/utils/socket-config';

import { LicitNameComponent } from './licit-name.component';

describe('LicitNameComponent', () => {
  let component: LicitNameComponent;
  let fixture: ComponentFixture<LicitNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SocketIoModule.forRoot(socketConfig)
      ],
      declarations: [ LicitNameComponent ]
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
});
