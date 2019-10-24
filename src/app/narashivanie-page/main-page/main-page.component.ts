import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit() {
    $(window).bind('load', () => {
      for (let i = 0; i < $('video').length; i++) {
        $('video')[i].load();
      }
    });
  }

  scroll() {
    let path = this.router.url.split('#');
    const element = document.getElementById(path[path.length - 1]);
    element.scrollIntoView();
  }

  ngOnInit() {}
}
