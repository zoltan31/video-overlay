import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseBidComponent } from './raise-bid.component';

describe('RaiseBidComponent', () => {
  let component: RaiseBidComponent;
  let fixture: ComponentFixture<RaiseBidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseBidComponent ]
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
});
