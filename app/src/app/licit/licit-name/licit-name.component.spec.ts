import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicitNameComponent } from './licit-name.component';

describe('LicitNameComponent', () => {
  let component: LicitNameComponent;
  let fixture: ComponentFixture<LicitNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicitNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicitNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
