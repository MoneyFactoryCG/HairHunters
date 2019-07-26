import { Component, OnInit, Input } from "@angular/core";

import * as $ from "jquery";

@Component({
  selector: "app-button-modal-window",
  templateUrl: "./button-modal-window.component.html",
  styleUrls: ["./button-modal-window.component.scss"]
})
export class ButtonModalWindowComponent implements OnInit {
  @Input() text: string;
  @Input() windowId: string;
  @Input() isLink: boolean;
  @Input() link: string;

  openWindow() {
    setTimeout(() => {
      $('.' + this.windowId + ' .modal-window').css({
        transform:'translateY(0)',
        opacity: "1"
      });
    }, 10)
    $('.' + this.windowId).fadeIn(300).css({display: 'flex'});
    $('html').css({
      'overflow': 'hidden'
    })
  }

  constructor() {}

  ngOnInit() {}
}
