import { Component, OnInit, ViewChild } from "@angular/core";

import {
  SwiperConfigInterface, SwiperComponent, SwiperDirective,
} from "ngx-swiper-wrapper";

import * as $ from 'jquery';

@Component({
  selector: "app-works-carousel",
  templateUrl: "./works-carousel.component.html",
  styleUrls: ["./works-carousel.component.scss"]
})
export class WorksCarouselComponent implements OnInit {

  config: SwiperConfigInterface = {
    pagination: {
      el: ".works-swiper-pagination",
      clickable: true
    },
    a11y: true,
    navigation: {
      nextEl: ".works-swiper-button-next",
      prevEl: ".works-swiper-button-prev"
    },
    slidesPerView: 3,
    loop: true,
    breakpoints: {
      690: {
        slidesPerView: 1,
        spaceBetween: 10
      },
    }
  };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  slides = [];
  
  constructor() {}

  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      this.slides.push({ img: `../../../assets/imgs/works-page/${i}.JPG` });
    }
  }
}
