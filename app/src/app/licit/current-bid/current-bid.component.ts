import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-bid',
  templateUrl: './current-bid.component.html',
  styleUrls: ['./current-bid.component.css']
})
export class CurrentBidComponent implements OnInit {
  currentBid: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
