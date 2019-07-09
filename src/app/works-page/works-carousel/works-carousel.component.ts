import { Component, OnInit } from "@angular/core";

import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface
} from "ngx-swiper-wrapper";

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
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    slidesPerView: 3
  };

  slides = [];

  constructor() {}

  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      this.slides.push({ img: `../../../assets/imgs/works-page/${i}.JPG` });
    }
  }
}
