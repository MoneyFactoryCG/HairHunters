import {Component, OnInit} from '@angular/core';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})

export class AdminPanelComponent implements OnInit {

  constructor(private i18n: NzI18nService) {
    const element = document.createElement('script');
    element.src = 'admin-style.js';
    element.type = 'text/javascript';
    document.body.appendChild(element);
    $('.cookies-modal').css({
      display: 'none'
    });
    this.i18n.setLocale(en_US);
   }

  ngOnInit() {
  }

}