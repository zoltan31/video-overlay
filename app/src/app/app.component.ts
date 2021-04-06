import { Component, Input } from '@angular/core';
import { Auction } from './auction';
import { AuctionService } from './auction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @Input() auction?: Auction;
  @Input() licitEvents?: string[];
  userId: number;

  setCallbacks(): void {
    this.auctionService.getAuction()
      .subscribe(auction => this.auction = auction);
    this.auctionService.getPrice()
      .subscribe(price => {console.log(price);this.auction.price = price});
    this.auctionService.getLicitEvent()
      .subscribe(licitEvent => { console.log(licitEvent);this.licitEvents.push(licitEvent)});
  }

  constructor (
    private auctionService: AuctionService
  ) {}

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  ngOnInit(): void {
    this.licitEvents = new Array<string>();
    this.userId = this.getRandomInt(100);
    this.setCallbacks();
  }

  increase(): void {
    this.auction.licit = this.auction.licit + 100;
  }

  decrease(): void {
    if(this.auction.licit > 100)
      this.auction.licit = this.auction.licit - 100;
  }

  makeLicit(): void{
    this.auctionService.postLicit(this.auction.licit, this.userId).subscribe(res => console.log(res));
  }
}