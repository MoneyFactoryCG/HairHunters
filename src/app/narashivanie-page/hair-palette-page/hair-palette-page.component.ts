import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-hair-palette-page',
  templateUrl: './hair-palette-page.component.html',
  styleUrls: ['./hair-palette-page.component.scss']
})
export class HairPalettePageComponent implements OnInit {

  windowId: string = 'hair-palette-modal';

  openWindow() {
    setTimeout(() => {
      $('body').css({
        overflow: 'hidden',
      })
      $('.hair-palette-container').css({
        transform:'translateY(0)',
        opacity: "1"
      });
    }, 50)
    $('.' + this.windowId).fadeIn(300).css({display: 'flex'});
  }

  constructor() { }

  ngOnInit() {
  }

}
