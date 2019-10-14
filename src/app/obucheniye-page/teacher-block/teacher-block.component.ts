import { Component, OnInit, HostListener } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-teacher-block',
  templateUrl: './teacher-block.component.html',
  styleUrls: ['./teacher-block.component.scss'],
})
export class TeacherBlockComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    this.activeSteps();
  }

  constructor() {}

  ngOnInit() {}

  elem: HTMLElement;

  elementInViewport(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    const width = el.offsetWidth;
    const height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
    return (
      // top >= window.pageYOffset &&
      // left >= window.pageXOffset &&
      // top + height <= window.pageYOffset + window.innerHeight &&
      // left + width <= window.pageXOffset + window.innerWidth
      100 -
        ((window.innerHeight -
          (window.pageYOffset + window.innerHeight - top)) *
          100) /
          window.innerHeight >=
        60 &&
      100 -
        ((window.innerHeight -
          (window.pageYOffset + window.innerHeight - top)) *
          100) /
          window.innerHeight <=
        60 + (height * 100) / window.innerHeight
    );
  }

  activeSteps() {
    const steps = $('.steps > .text > .line');
    console.log(steps);
    for (let i = 0; i < steps.length; i++) {
      if (this.elementInViewport(steps[i])) {
        $(steps[i]).css({
          background: '#d49fff',
          transition: 'background 0s linear',
        });
        // $(steps[i].children[1]).css({
        //   'text-shadow': '0px 0px 4px rgba(0, 0, 0, 0.1)',
        // });
      } else {
        $(steps[i]).css({
          background: '#FFF',
          transition: 'background 2s ease',
        });
        // $(steps[i].children[1]).css({
        //   'text-shadow': '0px 0px 4px rgba(0, 0, 0, 0)',
        // });
      }
    }
  }
}
