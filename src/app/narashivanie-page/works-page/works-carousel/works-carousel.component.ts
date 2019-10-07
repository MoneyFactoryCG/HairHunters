import { Component, OnInit, ViewChild } from '@angular/core';

import {
  SwiperConfigInterface,
  SwiperComponent,
  SwiperDirective,
} from 'ngx-swiper-wrapper';

import * as $ from 'jquery';

@Component({
  selector: 'app-works-carousel',
  templateUrl: './works-carousel.component.html',
  styleUrls: ['./works-carousel.component.scss'],
})
export class WorksCarouselComponent implements OnInit {
  config: SwiperConfigInterface = {
    pagination: {
      el: '.works-swiper-pagination',
      clickable: true,
    },
    a11y: true,
    navigation: {
      nextEl: '.works-swiper-button-next',
      prevEl: '.works-swiper-button-prev',
    },
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    spaceBetween: 20,
    lazy: true,
    breakpoints: {
      690: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  @ViewChild(SwiperComponent, { static: false })
  componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false })
  directiveRef?: SwiperDirective;

  slides = [
    {
      img: 'assets/imgs/works-page/narashchivaniye-volos-01.JPG',
      alt:
        'наращивание волос Итальянское наращивание микрокапсулами натуральных славянских волос на кератин',
    },
    {
      img: 'assets/imgs/works-page/narashchivaniye-volos-02.JPG',
      alt:
        'наращивание волос Испанское холодное наращивание натуральных славянских волос на биогель',
    },
    {
      img: 'assets/imgs/works-page/narashchivaniye-volos-03.JPG',
      alt:
        'наращивание волос Студия по наращиванию натуральных славянских волос харьков',
    },
    {
      img: 'assets/imgs/works-page/narashchivaniye-volos-04.JPG',
      alt:
        'наращивание волос Итальянское наращивание микрокапсулами натуральных славянских волос на кератин',
    },
    {
      img: 'assets/imgs/works-page/narashchivaniye-volos-05.JPG',
      alt:
        'наращивание волос Испанское холодное наращивание натуральных славянских волос на биогель',
    },
    {
      img: 'assets/imgs/works-page/narashchivaniye-volos-06.JPG',
      alt:
        'наращивание волос Студия по наращиванию натуральных славянских волос харьков',
    },
    {
      img: 'assets/imgs/works-page/narashchivaniye-volos-07.JPG',
      alt:
        'наращивание волос Итальянское наращивание микрокапсулами натуральных славянских волос на кератин',
    },
    {
      img: 'assets/imgs/works-page/narashchivaniye-volos-08.JPG',
      alt:
        'наращивание волос Испанское холодное наращивание натуральных славянских волос на биогель',
    },
    {
      img: 'assets/imgs/works-page/narashchivaniye-volos-09.JPG',
      alt:
        'наращивание волос Студия по наращиванию натуральных славянских волос харьков',
    },
    {
      img: 'assets/imgs/works-page/narashchivaniye-volos-10.JPG',
      alt:
        'наращивание волос Итальянское наращивание микрокапсулами натуральных славянских волос на кератин',
    },
  ];

  constructor() {}

  ngOnInit() {
    // for (let i = 1; i <= 10; i++) {
    //   this.slides.push({ img: `assets/imgs/works-page/${i}.JPG` });
    // }
  }
}
