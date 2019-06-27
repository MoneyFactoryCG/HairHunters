import { Component, OnInit, ViewChild } from "@angular/core";

import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface
} from "ngx-swiper-wrapper";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit {
  public slides = [
    "First slide",
    "Second slide",
    "Third slide",
    "Fourth slide",
    "Fifth slide",
    "Sixth slide",
    "7 slide",
    "8 slide"
  ];

  public index = 1;

  public config: SwiperConfigInterface = {
    //a11y: true,
    //effect: 'coverflow',
    spaceBetween: 20,
    navigation: false,
    slidesPerGroup: 3,
    slidesPerView: 'auto',
    centeredSlides: true,
    initialSlide: 3,
    // coverflowEffect: {
    //   rotate: 0,
    //   stretch: 0,
    //   depth: 200,
    //   modifier: 1,
    //   slideShadows: true
    // },
    loop: true
  };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  constructor() {}

  ngOnInit() {}

  handleNextSlide() {
    this.directiveRef.nextSlide();
  }

  handlePrevSlide() {
    this.directiveRef.prevSlide();
  }
}
