import { Component, OnInit } from '@angular/core';
import { RaiseAmountService } from '../raise-amount.service';

@Component({
  selector: 'app-raise-bid',
  templateUrl: './raise-bid.component.html',
  styleUrls: ['./raise-bid.component.css']
})
export class RaiseBidComponent implements OnInit {
  raiseAmount: number = 0;
  constructor(
    private raiseAmountService: RaiseAmountService
  ) { }

  ngOnInit(): void {
    this.raiseAmountService.getRaiseAmount()
      .subscribe(raiseAmount => this.raiseAmount = raiseAmount);;
  }

}
