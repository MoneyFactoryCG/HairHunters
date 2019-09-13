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
    console.log(event);
    $(event.target.children[1]).css({
      transform: `translate(calc(${event.layerX}px - 50%), calc(${event.layerY}px - 50%))`,
    });
  }

  resetPuls(event) {
    $(event.target.children[1]).css({
      transform: `translate(0, 0)`,
    });
  }

  constructor() {}

  ngOnInit() {}
}
