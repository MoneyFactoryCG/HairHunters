import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'angular2-useful-swiper';

@Component({
  selector: 'app-stock-carousel',
  templateUrl: './stock-carousel.component.html',
  styleUrls: ['./stock-carousel.component.scss']
})
export class StockCarouselComponent implements OnInit {

  config: SwiperOptions = {
    //pagination: { el: '.swiper-pagination', clickable: true },
    // effect: 'coverflow',
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // },
    // coverflowEffect: {
    //   depth: 100,
    //   rotate: 0,
    //   stretch: -100,
    //   slideShadows: false
    // },
    autoplay: {
      delay: 5000,
    },
    loop: true,
    loopedSlides: 3,
    speed: 1000,
    freeMode: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true
  };

  slides = [];

  constructor() {}

  ngOnInit() {
    for (let i = 1; i <= 23; i++) {
      this.slides.push({img:`../../../assets/imgs/hair-palette-page/carousel/${i}.jpg`});
    }
  }

}
