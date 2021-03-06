import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { SocketIoModule } from 'ngx-socket-io';
import { socketConfig } from 'src/utils/socket-config';
import { LicitButtonsComponent } from './licit/licit-buttons/licit-buttons.component';
import { HighestBidComponent } from './licit/highest-bid/highest-bid.component';
import { LicitNameComponent } from './licit/licit-name/licit-name.component';
import { UserActivitiesComponent } from './licit/user-activities/user-activities.component';
import { TimerComponent } from './licit/timer/timer.component';
import { RaiseBidComponent } from './licit/raise-bid/raise-bid.component';
import { LicitComponent } from './licit/licit.component';
import { LoginComponent } from './login/login.component';
import { WinnerComponent } from './licit/winner/winner.component';

@NgModule({
  declarations: [
    AppComponent,
    LicitButtonsComponent,
    HighestBidComponent,
    LicitNameComponent,
    UserActivitiesComponent,
    TimerComponent,
    RaiseBidComponent,
    LicitComponent,
    LoginComponent,
    WinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(socketConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
