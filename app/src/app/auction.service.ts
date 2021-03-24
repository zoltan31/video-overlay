import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Auction } from './auction'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  private auctionUrl = 'http://localhost:5000/api/auction';

  getName() : Observable<Auction> {
    return this.http.get<Auction>(this.auctionUrl);
  }

  constructor(
    private http: HttpClient,
  ) { }
}
