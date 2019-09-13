import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    $(window).bind('load', () => {
      for (let i = 0; i < $('video').length; i++) {
        $('video')[i].load();
      }
    });
  }

  ngOnInit() {}
}
