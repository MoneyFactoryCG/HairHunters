import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  isMobileDevice: boolean;

  constructor() {}

  ngOnInit() {
    const deviceWidth = 480;
    this.isMobileDevice =
      navigator.userAgent.match(/iPad|iPhone|iPod/i) != null ||
      screen.width <= deviceWidth;
  }
}
