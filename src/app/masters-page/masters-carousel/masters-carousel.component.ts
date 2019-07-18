import { Component, OnInit, ViewChild } from "@angular/core";

import {
  SwiperConfigInterface, SwiperComponent, SwiperDirective,
} from "ngx-swiper-wrapper";

import * as $ from 'jquery';

@Component({
  selector: 'app-masters-carousel',
  templateUrl: './masters-carousel.component.html',
  styleUrls: ['./masters-carousel.component.scss']
})
export class MastersCarouselComponent implements OnInit {

  config: SwiperConfigInterface = {
    pagination: {
      el: ".masters-swiper-pagination",
      clickable: true
    },
    a11y: true,
    navigation: false,
    slidesPerView: 'auto',
    freeMode: true
  };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  constructor() { }

  ngOnInit() {
  }

}
