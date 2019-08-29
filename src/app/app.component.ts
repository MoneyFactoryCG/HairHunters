import {
  Renderer2,
  Component,
  AfterViewInit,
  OnInit,
  Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import * as $ from 'jquery';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'Студия по наращиванию и продаже волос №1';
  hair = [
    {
      img: `assets/imgs/hair-palette-page/carousel/1.jpg`,
      code: '#1B',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/2.jpg`,
      code: '#1',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/3.jpg`,
      code: '#2',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/4.jpg`,
      code: '#3',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/5.jpg`,
      code: '#4',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/6.jpg`,
      code: '#5',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/7.jpg`,
      code: '#6',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/8.jpg`,
      code: '#8',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/9.jpg`,
      code: '#10',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/10.jpg`,
      code: '#12',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/11.jpg`,
      code: '#14',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/12.jpg`,
      code: '#16',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/13.jpg`,
      code: '#18',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/14.jpg`,
      code: '#22',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/15.jpg`,
      code: '#24',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/16.jpg`,
      code: '#27',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/17.jpg`,
      code: '#Plat',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/18.jpg`,
      code: '#60',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/19.jpg`,
      code: '#60H',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/20.jpg`,
      code: '#613',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/21.jpg`,
      code: '#100',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/22.jpg`,
      code: '#130',
      show: false
    },
    {
      img: `assets/imgs/hair-palette-page/carousel/23.jpg`,
      code: '#135',
      show: false
    }
  ];
  isMobileDevice: boolean;

  constructor(
    private router: Router,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: 'Pageview',
          // pagePath: '/thanks',
          // pageTitle: 'Thank you' // some arbitrary name for the page/state
        });
      }
    });
  }

  closeWindow(windowId: string) {
    $('.' + windowId + '-container').css({
      transform: 'translateY(100%)',
      opacity: '0'
    });
    setTimeout(() => {
      $('.' + windowId + '-modal').fadeOut(300);
      $('body').css({
        overflow: 'auto'
      });
      $('.submit-container .success').css({
        display: 'none'
      });
      $('.submit-container .failed').css({
        display: 'none'
      });
    }, 300);
  }

  closeCookies() {
    $('.cookies-modal').css({
      transform: 'translateY(150%)'
    });
  }

  ngOnInit() {
    setTimeout(() => {
      $('.cookies-modal').css({
        transform: 'translateY(0)'
      });
    }, 3500);
    this.isMobileDevice =
      navigator.userAgent.match(/iPad|iPhone|iPod/i) != null ||
      screen.width <= 480;
    // const s = this._renderer2.createElement('script');
    //   s.text = `window.LEELOO_LEADGENTOOLS = (window.LEELOO_LEADGENTOOLS || []).concat('flgl7h');`;

    //   this._renderer2.appendChild(this._document.querySelector('.success'), s);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      $('.app-loading').fadeOut();
    }, 1500);
  }
}
