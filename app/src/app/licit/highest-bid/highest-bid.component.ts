import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../auction.service';

@Component({
  selector: 'app-highest-bid',
  templateUrl: './highest-bid.component.html',
  styleUrls: ['./highest-bid.component.css']
})
export class HighestBidComponent implements OnInit {
  highestBid: number = 0;

  constructor(
    private auctionService: AuctionService
  ) { }

  ngOnInit(): void {
    this.auctionService.getAuction()
      .subscribe(auction => this.highestBid = auction.price);
    this.auctionService.getHighestBid()
      .subscribe(highestBid => this.highestBid = highestBid);
  }
}
