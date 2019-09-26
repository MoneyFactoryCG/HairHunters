import {
  Renderer2,
  Component,
  AfterViewInit,
  OnInit,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import * as $ from 'jquery';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'Студия по наращиванию и продаже волос №1';

  constructor(
    private router: Router,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
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

  ngOnInit() {}

  ngAfterViewInit() {
    // setTimeout(() => {
    //   $('.app-loading').fadeOut();
    // }, 500);
    $('.app-loading').fadeOut();
  }
}
