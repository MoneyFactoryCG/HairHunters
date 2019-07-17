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
    slidesPerView: 3
  };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  slides = [];
  
  checkSlides() {
    console.log(this.directiveRef.getIndex())
    console.log(this.componentRef)
    if (this.directiveRef.getIndex() == 0) {
      $('.works-swiper-button-prev').addClass('disabled');
    } else {
      $('.works-swiper-button-prev').removeClass('disabled');
    }
    if (this.directiveRef.getIndex() == 9) {
      $('.works-swiper-button-next').addClass('disabled');
    } else {
      $('.works-swiper-button-next').removeClass('disabled');
    }
  }

  

  constructor() {}

  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      this.slides.push({ img: `../../../assets/imgs/works-page/${i}.JPG` });
    }
  }
}
