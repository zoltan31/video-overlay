import { Component, Input } from '@angular/core';
import { Auction } from './licit/auction';
import { AuctionService } from './licit/auction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor () {}

  ngOnInit(): void {}
}