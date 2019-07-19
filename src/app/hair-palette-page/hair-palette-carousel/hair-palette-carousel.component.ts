import { Component, OnInit } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-hair-palette-carousel',
  templateUrl: './hair-palette-carousel.component.html',
  styleUrls: ['./hair-palette-carousel.component.scss']
})
export class HairPaletteCarouselComponent implements OnInit {

  config: SwiperConfigInterface = {
    pagination: {
      el: ".palette-swiper-pagination",
      type: 'custom',
      renderCustom: (swiper, current, total) => {
        return this.customProgressBar(current, total);
      }
    },
    navigation: {
      nextEl: '.palette-swiper-button-next',
      prevEl: '.palette-swiper-button-prev'
    },
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    freeModeMomentumRatio: 0.5,
    freeModeMomentumVelocityRatio: 0.4,
    freeModeSticky: true,
    preloadImages: false,
    lazy: false,
    loop: true,
    breakpoints: {
      690: {
        slidesPerView: 'auto',
        freeMode: false,
        centeredSlides: true
      }
    }
  };

  slides = [
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/1.jpg`,
      code: '18-HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/2.jpg`,
      code: '1HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/3.jpg`,
      code: '2HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/4.jpg`,
      code: '3HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/5.jpg`,
      code: '4HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/6.jpg`,
      code: '5HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/7.jpg`,
      code: '6HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/8.jpg`,
      code: '8HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/9.jpg`,
      code: '10HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/10.jpg`,
      code: '12HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/11.jpg`,
      code: '14HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/12.jpg`,
      code: '16HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/13.jpg`,
      code: '18HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/14.jpg`,
      code: '22HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/15.jpg`,
      code: '24HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/16.jpg`,
      code: '27HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/17.jpg`,
      code: 'PlatHH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/18.jpg`,
      code: '60HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/19.jpg`,
      code: '60H-HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/20.jpg`,
      code: '613HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/21.jpg`,
      code: '100HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/22.jpg`,
      code: '130HH'
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/23.jpg`,
      code: '135HH'
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
      "></span>";

    let progressBarContainer: string =
      "<div class='swiper-pagination-progressbar' style='height: 3px; top: unset; bottom: -25px; width: 100%; background-color: #fff;'>";
    progressBarContainer += progressBar;
    progressBarContainer += "</span></div>";

    return progressBarContainer;
  }

  constructor() {}

  ngOnInit() {
  }

}
