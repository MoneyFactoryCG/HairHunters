import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.component.html',
  styleUrls: ['./modal-menu.component.scss'],
})
export class ModalMenuComponent implements OnInit {
  @Input() isOpen: boolean;
  isMobileDevice: boolean;

  constructor() {}

  closeMenu() {
    const element = document.querySelector('.modal-menu');
    element.className = 'modal-menu';
  }

  scroll(el) {
    this.closeMenu();
    const element = document.getElementById(el);
    element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  }

  ngOnInit() {
    const deviceWidth = 480;
    this.isMobileDevice =
      navigator.userAgent.match(/iPad|iPhone|iPod/i) != null ||
      screen.width <= deviceWidth;
  }
}
