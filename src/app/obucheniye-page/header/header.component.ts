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
  @Input() isNav = true; // prettier-ignore

  @HostListener('window:scroll', ['$event'])
  fixedHeader() {
    if ($(window).scrollTop() > 30) {
      $('.header').addClass('fixed');
      $('.hamburger-menu').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
      $('.hamburger-menu').removeClass('fixed');
    }
  }

  scroll(el) {
    const element = document.getElementById(el);
    element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  }

  constructor() {}

  ngOnInit() {}
}
