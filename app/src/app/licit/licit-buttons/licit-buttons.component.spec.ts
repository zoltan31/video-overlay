import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicitButtonsComponent } from './licit-buttons.component';

describe('LicitButtonsComponent', () => {
  let component: LicitButtonsComponent;
  let fixture: ComponentFixture<LicitButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicitButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicitButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
