import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licit-name',
  templateUrl: './licit-name.component.html',
  styleUrls: ['./licit-name.component.css']
})
export class LicitNameComponent implements OnInit {
  auctionname: string = "auction name placeholder";
  constructor() { }

  ngOnInit(): void {
  }
  
  makeLicit(): void {}

  increase(): void {}

  decrease(): void {}
}
