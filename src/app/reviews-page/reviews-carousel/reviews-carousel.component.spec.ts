import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsCarouselComponent } from './reviews-carousel.component';

describe('ReviewsCarouselComponent', () => {
  let component: ReviewsCarouselComponent;
  let fixture: ComponentFixture<ReviewsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
