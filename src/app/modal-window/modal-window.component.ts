import { Component, OnInit, Input } from '@angular/core';

import * as $ from "jquery"

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  @Input() windowId: string;

  constructor() { }

  send() {
  }

  closeWindow() {
    $('.' + this.windowId + ' .modal-window').css({
      transform:'translateY(100%)',
      opacity:'0'
    })

    $('.' + this.windowId).fadeOut( 300 );

  }

  ngOnInit() {
  }

}
