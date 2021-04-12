import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raise-bid',
  templateUrl: './raise-bid.component.html',
  styleUrls: ['./raise-bid.component.css']
})
export class RaiseBidComponent implements OnInit {
  raiseAmount: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
