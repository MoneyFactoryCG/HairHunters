import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
})
export class HamburgerMenuComponent implements OnInit {
  @Input() status: boolean;

  constructor() {}

  openMenu() {
    const element = document.querySelector('.modal-menu');
    if (this.status) {
      element.className = 'modal-menu';
    }
    if (!this.status) {
      element.className = 'modal-menu is-active';
      const hamburger = document.querySelector('.hamburger-menu');
      hamburger.className = 'hamburger-menu fixed';
    }
  }

  ngOnInit() {}
}
