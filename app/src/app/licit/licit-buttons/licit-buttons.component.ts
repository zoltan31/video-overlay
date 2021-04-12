import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../auction.service';
import { RaiseAmountService } from '../raise-amount.service';

@Component({
  selector: 'app-licit-buttons',
  templateUrl: './licit-buttons.component.html',
  styleUrls: ['./licit-buttons.component.css']
})
export class LicitButtonsComponent implements OnInit {

  raiseAmount: number = 100;
  userID: number;

  constructor(
    private auctionService: AuctionService,
    private RaiseAmountService: RaiseAmountService
  ) { }

  ngOnInit(): void {
    this.userID = Math.floor(Math.random() * 100);
    this.RaiseAmountService.setRaiseAmount(this.raiseAmount);
  }

  makeLicit(): void {
    this.auctionService.postBid(this.raiseAmount, this.userID)
      .subscribe(x => {
        this.raiseAmount = 100;
        this.RaiseAmountService.setRaiseAmount(this.raiseAmount);
      });
  }

  increase(): void {
    this.raiseAmount += 100;
    this.RaiseAmountService.setRaiseAmount(this.raiseAmount);
  }

  decrease(): void {
    if (this.raiseAmount > 100) {
      this.raiseAmount -= 100;
      this.RaiseAmountService.setRaiseAmount(this.raiseAmount);
    }
  }
}
