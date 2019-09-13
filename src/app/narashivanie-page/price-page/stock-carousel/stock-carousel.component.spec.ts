import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCarouselComponent } from './stock-carousel.component';

describe('StockCarouselComponent', () => {
  let component: StockCarouselComponent;
  let fixture: ComponentFixture<StockCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
