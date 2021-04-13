import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Auction } from './auction';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  private auctionUrl = 'http://localhost:5000/api/auction';
  private postBidUrl = 'http://localhost:5000/api/auction/postlicit'

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getAuction() : Observable<Auction> {
    return this.http.get<Auction>(this.auctionUrl);
  }

  constructor(
    private http: HttpClient,
    private socket: Socket,
  ) { }

  postBid(bid: number, userId: number): Observable<any> { 
    return this.http.post(this.postBidUrl, {"licit": bid, "userId": userId}, this.httpOptions);
  }
  
  getHighestBid(): Observable<number> {
    return this.socket.fromEvent<number>('price');
  }
  
  getBidEvent(): Observable<string> {
    return this.socket.fromEvent<string>('licit event');
  }
}