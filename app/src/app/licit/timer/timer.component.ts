import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { AuctionService } from '../auction.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  minute: number;
  second: number;

  constructor(
    private auctionService: AuctionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auctionService.getTimer().subscribe(x => {
      this.minute = Math.trunc(x/60);
      this.second = x%60;
      if (this.minute === 0 && this.second === 0) {
        setTimeout(() => {
          this.router.navigate(["/winner", {}]);
        }, 1000)
      }
    });
  }
}
