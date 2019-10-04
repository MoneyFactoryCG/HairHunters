import { Component, OnInit } from '@angular/core';
import { ObucheniyeService } from '../services/obucheniye.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.scss'],
})
export class MainBlockComponent implements OnInit {
  course;

  constructor(private obucheniyeService: ObucheniyeService) {}

  ngOnInit() {
    this.obucheniyeService.getDate().subscribe(
      res => {
        this.course = res;
      },
      error => {
        console.log(error);
      },
    );
    setTimeout(() => {
      this.display($('.certificate'));
      document
        .querySelector('.main-block')
        .querySelector('.circles').className = 'circles active';
    }, 1000);
  }

  display(el) {
    el.css({
      opacity: '1',
    });
  }
}
