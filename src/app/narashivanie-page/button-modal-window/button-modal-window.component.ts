import { Component, OnInit, Input } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-button-modal-window',
  templateUrl: './button-modal-window.component.html',
  styleUrls: ['./button-modal-window.component.scss'],
})
export class ButtonModalWindowComponent implements OnInit {
  @Input() text: string;
  @Input() windowId: string;
  @Input() isLink: boolean;
  @Input() link: string;

  openWindow() {
    setTimeout(() => {
      $('.' + this.windowId + ' .modal-window').css({
        transform: 'translateY(0)',
        opacity: '1',
      });
    }, 10);
    $('.' + this.windowId)
      .fadeIn(300)
      .css({ display: 'flex' });
    $('html').css({
      overflow: 'hidden',
    });
  }

  puls(event) {
    if (event.target.localName !== 'button') {
      $(event.target).css({
        transform: `translate(calc(${event.layerX}px - 50%), calc(${event.layerY}px - 50%))`,
      });
    }
  }

  resetPuls(event) {
    if (event.target.localName !== 'button') {
      if (window.innerWidth <= 1160) {
        $(event.target).css({
          transform: `translate(calc(68.5px - 50%), calc(68.5px - 50%))`,
        });
      } else {
        $(event.target).css({
          transform: `translate(calc(100px - 50%), calc(100px - 50%))`,
        });
      }
    }
  }

  constructor() {}

  ngOnInit() {}
}
