import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

import * as $ from "jquery";

@Component({
  selector: 'app-hair-palette-carousel',
  templateUrl: './hair-palette-carousel.component.html',
  styleUrls: ['./hair-palette-carousel.component.scss']
})
export class HairPaletteCarouselComponent implements OnInit, AfterViewInit {

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
    lazy: true,
    loop: false,
    breakpoints: {
      690: {
        slidesPerView: 'auto',
        freeMode: false,
        centeredSlides: true
      },
      375: {
        slidesPerView: 'auto',
        freeMode: false,
        centeredSlides: true,
        spaceBetween: 20
      }
    }
  };

  // ../../../
  slides = [
    {
      img: `assets/imgs/hair-palette-page/carousel/1.jpg`,
      code: '#1B',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/1B.mp4',
      alt: "Интернет магазин натуральных славянских волос для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/2.jpg`,
      code: '#1',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/1.mp4',
      alt: "Натуральные славянские волос для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/3.jpg`,
      code: '#2',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/2.mp4',
      alt: "Натуральные южнорусские волос для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/4.jpg`,
      code: '#3',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/3.mp4',
      alt: "Интернет магазин натуральных славянских волос для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/5.jpg`,
      code: '#4',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/4.mp4',
      alt: "Натуральные славянские волосы для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/6.jpg`,
      code: '#5',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/5.mp4',
      alt: "Натуральные южнорусские волосы для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/7.jpg`,
      code: '#6',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/6.mp4',
      alt: "Интернет магазин натуральных славянских волос для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/8.jpg`,
      code: '#8',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/8.mp4',
      alt: "Натуральные славянские волосы для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/9.jpg`,
      code: '#10',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/10.mp4',
      alt: "Натуральные южнорусские волосы для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/10.jpg`,
      code: '#12',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/12.mp4',
      alt: "Интернет магазин натуральных славянских волос для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/11.jpg`,
      code: '#14',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/14.mp4',
      alt: "Натуральные славянские волосы для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/12.jpg`,
      code: '#16',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/16.mp4',
      alt: "Натуральные южнорусские волосы для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/13.jpg`,
      code: '#18',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/18.mp4',
      alt: "Интернет магазин натуральных славянских волос для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/14.jpg`,
      code: '#22',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/22.mp4',
      alt: "Натуральные славянские волосы для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/15.jpg`,
      code: '#24',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/24.mp4',
      alt: "Натуральные южнорусские волосы для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/16.jpg`,
      code: '#27',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/27.mp4',
      alt: "Интернет магазин натуральных славянских волос для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/17.jpg`,
      code: '#1001',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/1001.mp4',
      alt: "Натуральные славянские волосы для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/18.jpg`,
      code: '#60H',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/60H.mp4',
      alt: "Натуральные южнорусские волосы для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/19.jpg`,
      code: '#130',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/130.mp4',
      alt: "Интернет магазин натуральных славянских волос для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/20.jpg`,
      code: '#135',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/135.mp4',
      alt: "Натуральные славянские волосы для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/21.jpg`,
      code: '#613',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/613.mp4',
      alt: "Натуральные южнорусские волосы для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/22.jpg`,
      code: '#60',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/60.mp4',
      alt: "Интернет магазин натуральных славянских волос для наращивания в срезе"
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/23.jpg`,
      code: '#Plat',
      video: 'https://moneyfactorycg.github.io/HairHunters/assets/imgs/hair-palette-page/carousel/Plat.mp4',
      alt: "Натуральные славянские волосы для наращивания в срезе"
    },
  ];

  video;

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

  startVideo(index) {
    const figure = $(".hair-palette-carousel .swiper-slide");
    console.log($(figure[index]).find(".play-ico-desktop"));
    $(figure[index]).find(".play-ico-desktop").css({
      opacity: "0",
      cursor: "auto"
    })
    this.video = figure.find("video");
    this.video[index].play();
  }

  hideVideo(index) {
    const figure = $(".hair-palette-carousel .swiper-slide");
    $(figure[index]).find(".play-ico-desktop").css({
      opacity: "1",
      cursor: "pointer"
    })
    this.video = figure.find("video");
    this.video[index].pause();
  }

  constructor() {}

  ngAfterViewInit() {
  }

  ngOnInit() {

  }

}
