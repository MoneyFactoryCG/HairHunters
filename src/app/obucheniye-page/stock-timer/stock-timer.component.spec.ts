import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTimerComponent } from './stock-timer.component';

describe('StockTimerComponent', () => {
  let component: StockTimerComponent;
  let fixture: ComponentFixture<StockTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
