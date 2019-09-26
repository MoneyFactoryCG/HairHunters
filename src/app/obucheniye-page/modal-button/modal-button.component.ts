import {
  Component,
  OnInit,
  Input,
  HostListener,
} from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.scss'],
})
export class ModalButtonComponent implements OnInit {
  @Input() theme = 'white';
  @Input() windowId: string;
  BG_COLOR: string;
  TEXT_COLOR: string;

  @HostListener('click') onClick() {
    this.openWindow();
  }

  constructor() {}

  puls(event) {
    console.log(event);
    if (event.target.localName !== 'button') {
      $(event.target).css({
        transform: `translate(calc(${event.layerX}px - 50%), calc(${event.layerY}px - 50%))`,
      });
    }
  }

  resetPuls(event) {
    if (event.target.localName !== 'button') {
      $(event.target).css({
        transform: `translate(calc(100px - 50%), calc(100px - 50%))`,
      });
    }
  }

  openWindow() {
    const el = document.getElementById(this.windowId);
    el.className = el.className + ' is-active';
  }

  ngOnInit() {
    if (this.theme === 'white') {
      this.BG_COLOR = '#FFF';
      this.TEXT_COLOR = '#151515';
    } else if (
      this.theme === 'prime' ||
      this.theme === 'prime-hover'
    ) {
      this.BG_COLOR = '#942FE5';
      this.TEXT_COLOR = '#FFF';
    }
  }
}
