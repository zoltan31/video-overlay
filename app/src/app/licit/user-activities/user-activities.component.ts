import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../auction.service';

@Component({
  selector: 'app-user-activities',
  templateUrl: './user-activities.component.html',
  styleUrls: ['./user-activities.component.css']
})
export class UserActivitiesComponent implements OnInit {

  licitEvents: string[] = new Array();
  constructor(
    private auctionService: AuctionService
  ) { }

  ngOnInit(): void {
    this.auctionService.getBidEvent()
      .subscribe(event => this.licitEvents.unshift(event))
    this.auctionService.getUserConnection()
      .subscribe(event => this.licitEvents.unshift("Hello " + event + "! 👋"))
  }
}
