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
  private postlicitUrl = 'http://localhost:5000/api/auction/postlicit'

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getName() : Observable<Auction> {
    return this.http.get<Auction>(this.auctionUrl);
  }

  constructor(
    private http: HttpClient,
    private socket: Socket,
  ) { }

  postLicit(licit: Number): Observable<any>{
    return this.http.post(this.postlicitUrl, {"licit": licit}, this.httpOptions);
  }
  
  getPrice(): Observable<number> {
    return this.socket.fromEvent<number>('price');
  }
}
