import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-narashivanie-page',
  templateUrl: './narashivanie-page.component.html',
  styleUrls: ['./narashivanie-page.component.scss'],
})
export class NarashivaniePageComponent
  implements AfterViewInit, OnInit {
  hair = [
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-01.jpg`,
      code: '#1B',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-02.jpg`,
      code: '#1',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-03.jpg`,
      code: '#2',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-04.jpg`,
      code: '#3',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-05.jpg`,
      code: '#4',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-06.jpg`,
      code: '#5',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-07.jpg`,
      code: '#6',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-08.jpg`,
      code: '#8',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-09.jpg`,
      code: '#10',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-10.jpg`,
      code: '#12',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-11.jpg`,
      code: '#14',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-12.jpg`,
      code: '#16',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-13.jpg`,
      code: '#18',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-14.jpg`,
      code: '#22',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-15.jpg`,
      code: '#24',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-16.jpg`,
      code: '#27',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-17.jpg`,
      code: '#1001',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-18.jpg`,
      code: '#60H',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-19.jpg`,
      code: '#130',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-20.jpg`,
      code: '#135',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-21.jpg`,
      code: '#60',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-22.jpg`,
      code: '#613',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-23.jpg`,
      code: '#Plat',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-24.jpg`,
      code: '#pink',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/volosy-v-sreze-25.jpg`,
      code: '#1/60',
      show: false,
    },
  ];
  isMobileDevice: boolean;

  constructor() {}

  closeWindow(windowId: string) {
    $('.' + windowId + '-container').css({
      transform: 'translateY(100%)',
      opacity: '0',
    });
    setTimeout(() => {
      $('.' + windowId + '-modal').fadeOut(300);
      $('body').css({
        overflow: 'auto',
      });
      $('.submit-container .success').css({
        display: 'none',
      });
      $('.submit-container .failed').css({
        display: 'none',
      });
    }, 300);
  }

  closeCookies() {
    $('.cookies-modal').css({
      transform: 'translateY(150%)',
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      $('.app-loading').fadeOut();
    }, 700);
  }

  ngOnInit() {
    setTimeout(() => {
      $('.cookies-modal').css({
        transform: 'translateY(0)',
      });
    }, 3500);
    this.isMobileDevice =
      navigator.userAgent.match(/iPad|iPhone|iPod/i) != null ||
      screen.width <= 480;
  }
}
