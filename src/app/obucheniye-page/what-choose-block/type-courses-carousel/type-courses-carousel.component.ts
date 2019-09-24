import { Component, OnInit, ViewChild } from '@angular/core';
import {
  SwiperDirective,
  SwiperComponent,
  SwiperConfigInterface,
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-type-courses-carousel',
  templateUrl: './type-courses-carousel.component.html',
  styleUrls: ['./type-courses-carousel.component.scss'],
})
export class TypeCoursesCarouselComponent implements OnInit {
  @ViewChild(SwiperComponent, { static: false })
  componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false })
  directiveRef?: SwiperDirective;

  config: SwiperConfigInterface = {
    loop: false,
    speed: 6000,
    spaceBetween: 0,
    slidesPerView: 'auto',
    centeredSlides: false,
    freeMode: false,
    breakpoints: {
      649: {
        centeredSlides: true,
        freeMode: true,
      },
    },
  };

  autoplayCarousel() {
    this.config.autoplay = {
      delay: 0,
      stopOnLastSlide: true,
    };
  }

  onInViewportChange(event) {
    if (event && window.innerWidth <= 649) {
      this.autoplayCarousel();
    }
  }
  constructor() {}

  ngOnInit() {}
}
