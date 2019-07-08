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
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: 'custom',
    //   renderCustom: (swiper, current, total) => {
    //     return this.customProgressBar(current, total);
    //   }
    // },
    a11y: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 30,
    slidesPerView: 2
    //centeredSlides: true
  };

  slides = [];

  constructor() {}

  ngOnInit() {
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
        this.slides.push({ img: `../../../assets/imgs/works-page/${j}.png` });
      }
    }
  }
}
