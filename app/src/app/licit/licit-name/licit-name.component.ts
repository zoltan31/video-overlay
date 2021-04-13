import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../auction.service';

@Component({
  selector: 'app-licit-name',
  templateUrl: './licit-name.component.html',
  styleUrls: ['./licit-name.component.css']
})
export class LicitNameComponent implements OnInit {
  auctionName: string = "auction name placeholder";
  constructor(
    private auctionService: AuctionService
  ) { }

  ngOnInit(): void {
    this.auctionService.getAuction()
      .subscribe(auction => this.auctionName = auction.name)
  }
}
