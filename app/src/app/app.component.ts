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

  getName(): void {
    this.auctionService.getName()
      .subscribe(auction => this.auction = auction);
  }

  constructor (
    private auctionService: AuctionService
  ) {}

  ngOnInit(): void {
    this.getName();
  }

  increase(): void {
    this.auction.licit = this.auction.licit + 100;
  }

  decrease(): void {
    if(this.auction.licit > 100)
      this.auction.licit = this.auction.licit - 100;
  }

  makeLicit(): void{
    this.auctionService.postLicit(this.auction.licit).subscribe(res => console.log(res));
    //this.getName();
  }
}