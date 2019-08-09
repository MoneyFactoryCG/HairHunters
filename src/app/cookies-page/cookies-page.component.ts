import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-cookies-page',
  templateUrl: './cookies-page.component.html',
  styleUrls: ['./cookies-page.component.scss']
})
export class CookiesPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.cookies-modal').css({
      opacity: '0'
    })
  }

}
