import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaiseAmountService {
  private raiseAmount = new Subject<number>();
  constructor() { }

  setRaiseAmount(raiseAmount: number) {
    this.raiseAmount.next(raiseAmount);
  }

  getRaiseAmount(): Observable<number> {
    return this.raiseAmount.asObservable();
  }

}
