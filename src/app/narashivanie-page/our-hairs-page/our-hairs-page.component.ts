import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-our-hairs-page',
  templateUrl: './our-hairs-page.component.html',
  styleUrls: ['./our-hairs-page.component.scss'],
})
export class OurHairsPageComponent implements OnInit, AfterViewInit {
  isCanPlay: boolean = false;

  constructor() {}

  ngOnInit() {}

  onInViewportChange(event) {
    $('#videoour')[0].muted = true;
  }

  ngAfterViewInit() {}
}
