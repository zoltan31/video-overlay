import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { RaiseAmountService } from '../raise-amount.service';

import { RaiseBidComponent } from './raise-bid.component';

class RaiseAmountStubService{
  getRaiseAmount(): Observable<number>{
    return of(200);
  }
}

describe('RaiseBidComponent', () => {
  let component: RaiseBidComponent;
  let fixture: ComponentFixture<RaiseBidComponent>;
  let raiseAmountServiceStub: RaiseAmountStubService = new RaiseAmountStubService();


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseBidComponent ],
      providers: [
        {
          provide: RaiseAmountService,
          useValue: raiseAmountServiceStub
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be 200', () => {
    expect(component.raiseAmount).toBe(200);
  })
});
