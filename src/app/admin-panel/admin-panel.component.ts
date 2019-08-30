import {Component, OnInit} from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})

export class AdminPanelComponent implements OnInit {

  constructor() {
    const element = document.createElement('script');
    element.src = 'admin-style.js';
    element.type = 'text/javascript';
    document.body.appendChild(element);
    $('.cookies-modal').css({
      display: 'none'
    });
   }

  ngOnInit() {
  }

}