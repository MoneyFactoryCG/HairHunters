import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-agreement-page',
  templateUrl: './agreement-page.component.html',
  styleUrls: ['./agreement-page.component.scss'],
})
export class AgreementPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      $('.app-loading').fadeOut();
    }, 700);
  }
}
