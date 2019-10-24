import {
  Component,
  OnInit,
  AfterContentInit,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit, AfterViewInit {
  isMobileDevice: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isMobileDevice =
      navigator.userAgent.match(/iPad|iPhone|iPod/i) != null ||
      screen.width <= 480;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.scroll();
    }, 2000);
  }

  scroll() {
    const path = this.router.url.split('#');
    const element = document.getElementById(path[path.length - 1]);
    console.log(element);
    console.log(document.body.scrollHeight);
    for (let i = 0; i < 2; i++) {
      element.scrollIntoView();
    }
  }
}
