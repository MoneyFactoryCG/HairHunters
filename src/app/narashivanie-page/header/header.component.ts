import {
  Component,
  OnInit,
  HostListener,
  Input,
} from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;

  isMobileDevice: boolean;

  @Input() isAgreement = false;

  @HostListener('window:scroll', ['$event'])
  fixedHeader() {
    if ($(window).scrollTop() > 30) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  }

  openMenu() {
    if (!this.isOpen) {
      $('.hamburger').addClass('active');
      $('.nav-hamburger').css({
        transform: 'translateX(0)',
      });
      $('body,html').css({
        overflow: 'hidden',
      });
      this.isOpen = true;
    } else {
      $('.hamburger').removeClass('active');
      $('.nav-hamburger').css({
        transform: 'translateX(100%)',
      });
      $('body,html').css({
        overflow: 'auto',
      });
      this.isOpen = false;
    }
  }

  scroll(el) {
    const element = document.getElementById(el);
    element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    $('.hamburger').removeClass('active');
    $('.nav-hamburger').css({
      transform: 'translateX(105%)',
    });
    $('html, body').css({
      overflow: 'auto',
    });
    this.isOpen = false;
  }

  constructor() {}

  ngOnInit() {
    const deviceWidth = 480;
    this.isMobileDevice =
      navigator.userAgent.match(/iPad|iPhone|iPod/i) != null ||
      screen.width <= deviceWidth;
  }
}
