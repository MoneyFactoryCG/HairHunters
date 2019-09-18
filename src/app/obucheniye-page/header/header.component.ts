import { Component, OnInit, HostListener } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  fixedHeader() {
    if ($(window).scrollTop() > 30) {
      $('.header').addClass('.fixed');
      $('.hamburger-menu').addClass('.fixed');
    } else {
      $('.header').removeClass('fixed');
      $('.hamburger-menu').removeClass('.fixed');
    }
  }

  constructor() {}

  ngOnInit() {}
}
