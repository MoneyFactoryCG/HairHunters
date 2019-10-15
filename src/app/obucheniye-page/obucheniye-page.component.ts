import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import * as $ from 'jquery';
import { SeoServiceService } from '../seo-service.service';

@Component({
  selector: 'app-obucheniye-page',
  templateUrl: './obucheniye-page.component.html',
  styleUrls: ['./obucheniye-page.component.scss'],
})
export class ObucheniyePageComponent
  implements OnInit, AfterViewInit {
  constructor(private seo: SeoServiceService) {
    this.seo.setTags({
      title: 'Курсы наращивания волос | Харьков', // Title
      titleSuffix: '- Hair Hunters', // Title Suffix
      description:
        'Индивидуальный курс по наращиванию волос. Холодное наращивание на биогель, наращивание на кератин.', // Description
      image: 'assets/og-img.jpg', // Image
      keywords:
        'нарашивание волос курсы, курсы, наращивание волос, харьков, биогель, кератин, холодное наращивание, горячее наращивание', // Keywords
    });
  }
  ngOnInit() {}
  ngAfterViewInit() {
    setTimeout(() => {
      $('.app-loading').fadeOut();
    }, 700);
  }
}
