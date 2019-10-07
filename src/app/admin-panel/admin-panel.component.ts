import { Component, OnInit } from '@angular/core';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  constructor(private i18n: NzI18nService) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.id = 'ng-zorro-css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'assets/ng-zorro-antd.min.css';
    link.media = 'all';
    head.appendChild(link);
    $('.cookies-modal').css({
      display: 'none',
    });
    this.i18n.setLocale(en_US);
  }

  ngOnInit() {
    $('.app-loading').fadeOut();
  }
}
