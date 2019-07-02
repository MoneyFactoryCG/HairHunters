import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from 'angular2-useful-swiper';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-hair-palette-carousel',
  templateUrl: './hair-palette-carousel.component.html',
  styleUrls: ['./hair-palette-carousel.component.scss']
})
export class HairPaletteCarouselComponent implements OnInit {

  config: SwiperOptions = {
    //pagination: { el: '.swiper-pagination', clickable: true },
    effect: 'coverflow',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    coverflowEffect: {
      depth: 100,
      rotate: 0,
      stretch: -100,
      slideShadows: false
    },
    spaceBetween: 0,
    slidesPerView: 'auto',
    centeredSlides: true,
    initialSlide: 3
  };

  slides = [];

  constructor() {}

  ngOnInit() {
    for (let i = 1; i <= 23; i++) {
      this.slides.push({img:`../../../assets/imgs/hair-palette-page/carousel/${i}.jpg`});
    }
  }

}
