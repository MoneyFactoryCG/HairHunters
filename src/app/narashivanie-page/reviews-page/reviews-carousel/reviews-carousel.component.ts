import { Component, OnInit } from '@angular/core';

import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-reviews-carousel',
  templateUrl: './reviews-carousel.component.html',
  styleUrls: ['./reviews-carousel.component.scss'],
})
export class ReviewsCarouselComponent implements OnInit {
  config: SwiperConfigInterface = {
    pagination: {
      el: '.reviews-swiper-pagination',
      type: 'custom',
      renderCustom: (swiper, current, total) => {
        return this.customProgressBar(current, total);
      },
    },
    a11y: true,
    navigation: {
      nextEl: '.reviews-swiper-button-next',
      prevEl: '.reviews-swiper-button-prev',
    },
    spaceBetween: 30,
    slidesPerView: 2,
    breakpoints: {
      690: {
        slidesPerView: 1,
      },
    },
  };

  slides = [
    {
      img:
        'assets/imgs/reviews-page/narashchivaniye-volos-otzyvy-01.jpg',
      alt:
        'нарщивание волос отзывы Итальянское наращивание микрокапсулами натуральных славянских волос на кератин',
    },
    {
      img:
        'assets/imgs/reviews-page/narashchivaniye-volos-otzyvy-02.jpg',
      alt:
        'нарщивание волос отзывы Испанское холодное наращивание натуральных славянских волос на биогель',
    },
    {
      img:
        'assets/imgs/reviews-page/narashchivaniye-volos-otzyvy-03.jpg',
      alt:
        'нарщивание волос отзывы Студия по наращиванию натуральных славянских волос харьков',
    },
    {
      img:
        'assets/imgs/reviews-page/narashchivaniye-volos-otzyvy-04.jpg',
      alt:
        'нарщивание волос отзывы Итальянское наращивание микрокапсулами натуральных славянских волос на кератин',
    },
    {
      img:
        'assets/imgs/reviews-page/narashchivaniye-volos-otzyvy-05.jpg',
      alt:
        'нарщивание волос отзывы Испанское холодное наращивание натуральных славянских волос на биогель',
    },
    {
      img:
        'assets/imgs/reviews-page/narashchivaniye-volos-otzyvy-06.jpg',
      alt:
        'нарщивание волос отзывы Студия по наращиванию натуральных славянских волос харьков',
    },
    {
      img:
        'assets/imgs/reviews-page/narashchivaniye-volos-otzyvy-07.jpg',
      alt:
        'нарщивание волос отзывы Итальянское наращивание микрокапсулами натуральных славянских волос на кератин',
    },
    {
      img:
        'assets/imgs/reviews-page/narashchivaniye-volos-otzyvy-08.jpg',
      alt:
        'нарщивание волос отзывы Испанское холодное наращивание натуральных славянских волос на биогель',
    },
    {
      img:
        'assets/imgs/reviews-page/narashchivaniye-volos-otzyvy-09.jpg',
      alt:
        'нарщивание волос отзывы Студия по наращиванию натуральных славянских волос харьков',
    },
    {
      img:
        'assets/imgs/reviews-page/narashchivaniye-volos-otzyvy-10.jpg',
      alt:
        'нарщивание волос отзывы Итальянское наращивание микрокапсулами натуральных славянских волос на кератин',
    },
  ];

  customProgressBar(current: number, total: number): string {
    const ratio: number = current / total;

    const progressBarStyle: string =
      "style='transform: translate3d(0px, 0px, 0px) scaleX(" +
      ratio +
      ") scaleY(1); transition-duration: 300ms; background: #942FE5;'";
    const progressBar: string =
      "<span class='swiper-pagination-progressbar-fill' " +
      progressBarStyle +
      '></span>';

    let progressBarContainer: string =
      "<div class='swiper-pagination-progressbar' style='height: 4px; top: 6px; width: 100%; background-color: #fff;'>";
    progressBarContainer += progressBar;
    progressBarContainer += '</span></div>';

    return progressBarContainer;
  }

  constructor() {}

  ngOnInit() {}
}
