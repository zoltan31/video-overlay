import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../auction.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  winner: string = "winner placeholder";
  price: number = 0;

  constructor(
    private auctionService: AuctionService
  ) { }

  ngOnInit(): void {
    this.auctionService.getWinner().subscribe(({name, price}) => {
      this.winner = name;
      this.price = price;
    });
  }

}
