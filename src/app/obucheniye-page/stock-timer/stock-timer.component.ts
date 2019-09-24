import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
} from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-stock-timer',
  templateUrl: './stock-timer.component.html',
  styleUrls: ['./stock-timer.component.scss'],
})
export class StockTimerComponent implements OnInit, AfterViewInit {
  @Input() date: string;
  @Input() timerId: string;
  @Input() color: string = '#000';

  isActive: boolean = true;

  getTimeRemaining(endtime) {
    let seconds;
    let minutes;
    let hours;
    let days;
    let time;

    time = Date.parse(endtime) - Date.parse('' + new Date());

    seconds = Math.floor((time / 1000) % 60);
    minutes = Math.floor((time / 1000 / 60) % 60);
    hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    days = Math.floor(time / (1000 * 60 * 60 * 24));

    return {
      time,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  initializeTimer(id, endtime) {
    const timer = document.getElementById(id);
    const daysSpan = timer.querySelector('.days');
    const hoursSpan = timer.querySelector('.hours');
    const minutesSpan = timer.querySelector('.minutes');

    const setProgress = (time, count, type) => {
      count = count / 4;
      const increment = 100 / count;
      if (time <= count) {
        $(`${type} .line-top`).css({
          width: `${time * increment}%`, //top
        });
        $(`${type} .line-right`).css({
          height: `0`,
        });
        $(`${type} .line-bottom`).css({
          width: '0',
        });
        $(`${type} .line-left`).css({
          height: '0',
        });
      }
      if (time > count && time <= count * 2) {
        $(`${type} .line-top`).css({
          width: '100%',
        });
        $(`${type} .line-right`).css({
          height: `${(time - 15) * increment}%`, //right
        });
        $(`${type} .line-bottom`).css({
          width: '0',
        });
        $(`${type} .line-left`).css({
          height: '0',
        });
      }
      if (time > count * 2 && time <= count * 3) {
        $(`${type} .line-top`).css({
          width: '100%',
        });
        $(`${type} .line-right`).css({
          height: '100%',
        });
        $(`${type} .line-bottom`).css({
          width: `${(time - 30) * increment}%`, //bottom
        });
        $(`${type} .line-left`).css({
          height: '0',
        });
      }
      if (time > count * 3 && time <= count * 4) {
        $(`${type} .line-top`).css({
          width: '100%',
        });
        $(`${type} .line-right`).css({
          height: `100%`,
        });
        $(`${type} .line-bottom`).css({
          width: `100%`,
        });
        $(`${type} .line-left`).css({
          height: `${(time - 45) * increment}%`, //left
        });
      }
    };

    const updateClock = () => {
      const time = this.getTimeRemaining(endtime);
      daysSpan.innerHTML = '' + time.days;
      hoursSpan.innerHTML = ('0' + time.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + time.minutes).slice(-2);

      setProgress(time.seconds, 60, '#minutes');
      setProgress(time.minutes, 60, '#hours');
      setProgress(time.hours, 24, '#days');

      if (Date.parse(this.date) - Date.parse('' + new Date()) <= 0) {
        this.isActive = false;
      }

      if (time.time <= 0) {
        clearInterval(timeinterval);
      }
    };
    let timeinterval;
    updateClock();
    timeinterval = setInterval(updateClock, 1000);
  }

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.date && this.isActive) {
      this.initializeTimer(this.timerId, this.date);
    }
  }
}
