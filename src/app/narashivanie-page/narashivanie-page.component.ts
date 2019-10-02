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
      img: `assets/imgs/hair-palette-page/carousel/1.jpg`,
      code: '#1B',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/2.jpg`,
      code: '#1',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/3.jpg`,
      code: '#2',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/4.jpg`,
      code: '#3',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/5.jpg`,
      code: '#4',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/6.jpg`,
      code: '#5',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/7.jpg`,
      code: '#6',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/8.jpg`,
      code: '#8',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/9.jpg`,
      code: '#10',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/10.jpg`,
      code: '#12',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/11.jpg`,
      code: '#14',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/12.jpg`,
      code: '#16',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/13.jpg`,
      code: '#18',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/14.jpg`,
      code: '#22',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/15.jpg`,
      code: '#24',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/16.jpg`,
      code: '#27',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/17.jpg`,
      code: '#1001',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/18.jpg`,
      code: '#60H',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/19.jpg`,
      code: '#130',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/20.jpg`,
      code: '#135',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/21.jpg`,
      code: '#60',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/22.jpg`,
      code: '#613',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/23.jpg`,
      code: '#Plat',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/24.jpg`,
      code: '#pink',
      show: false,
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/25.jpg`,
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

  ngAfterViewInit() {}

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
