import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

import * as $ from "jquery";

@Component({
  selector: "app-stock-card",
  templateUrl: "./stock-card.component.html",
  styleUrls: ["./stock-card.component.scss"]
})
export class StockCardComponent implements OnInit, AfterViewInit {
  @Input() deadline;
  @Input() counterId?: string;
  @Input() cookieDeadline;

  isActive: boolean = true;
  isActiveCookie: boolean = true;

  constructor(private cookieService: CookieService) {}

  getTimeRemaining(endtime) {
    let seconds;
    let minutes;
    let hours;
    let days;
    let t;

    if (this.deadline !== 0) {
      t = Date.parse(endtime) - Date.parse("" + new Date());
    }

    if (
      +this.cookieDeadline &&
      !this.cookieService.get("deadline" + this.counterId)
    ) {
      this.cookieService.set(
        "deadline" + this.counterId,
        "" + Date.parse("" + new Date()),
        30
      );
      t =
        endtime * 60 * 60 * 1000 +
        +this.cookieService.get("deadline" + this.counterId) -
        Date.parse("" + new Date());
    }
    if (
      +this.cookieDeadline &&
      this.cookieService.get("deadline" + this.counterId)
    ) {
      t =
        endtime * 60 * 60 * 1000 +
        +this.cookieService.get("deadline" + this.counterId) -
        Date.parse("" + new Date());
    }

    seconds = Math.floor((t / 1000) % 60);
    minutes = Math.floor((t / 1000 / 60) % 60);
    hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector(".days");
    const hoursSpan = clock.querySelector(".hours");
    const minutesSpan = clock.querySelector(".minutes");

    const setProgress = (time, count, type) => {
      count = count / 4;
      const increment = 100 / count;
      if (time <= count) {
        $(`${type} .line-top`).css({
          width: `${time * increment}%` //top
        });
        $(`${type} .line-right`).css({
          height: `0`
        });
        $(`${type} .line-bottom`).css({
          width: "0"
        });
        $(`${type} .line-left`).css({
          height: "0"
        });
      }
      if (time > count && time <= count * 2) {
        $(`${type} .line-top`).css({
          width: "100%"
        });
        $(`${type} .line-right`).css({
          height: `${(time - 15) * increment}%` //right
        });
        $(`${type} .line-bottom`).css({
          width: "0"
        });
        $(`${type} .line-left`).css({
          height: "0"
        });
      }
      if (time > count * 2 && time <= count * 3) {
        $(`${type} .line-top`).css({
          width: "100%"
        });
        $(`${type} .line-right`).css({
          height: "100%"
        });
        $(`${type} .line-bottom`).css({
          width: `${(time - 30) * increment}%` //bottom
        });
        $(`${type} .line-left`).css({
          height: "0"
        });
      }
      if (time > count * 3 && time <= count * 4) {
        $(`${type} .line-top`).css({
          width: "100%"
        });
        $(`${type} .line-right`).css({
          height: `100%`
        });
        $(`${type} .line-bottom`).css({
          width: `100%`
        });
        $(`${type} .line-left`).css({
          height: `${(time - 45) * increment}%` //left
        });
      }
    };

    const updateClock = () => {
      const t = this.getTimeRemaining(endtime);
      daysSpan.innerHTML = "" + t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);

      setProgress(t.seconds, 60, "#minutes");
      setProgress(t.minutes, 60, "#hours");
      setProgress(t.hours, 24, "#days");

      // console.log(t.total);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    };

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  ngAfterViewInit() {
    if (Date.parse(this.deadline) - Date.parse("" + new Date()) <= 0) {
      this.isActive = false;
    }
    if (
      this.cookieDeadline * 60 * 60 * 1000 +
        +this.cookieService.get("deadline" + this.counterId) -
        Date.parse("" + new Date()) <=
      0 && this.cookieService.get("deadline" + this.counterId) || this.cookieDeadline === '0'
    ) {
      this.isActiveCookie = false;
    }
    console.log(this.isActive + '' + this.isActiveCookie)
    if (this.deadline && this.isActive) {
      this.initializeClock(this.counterId, this.deadline);
    }
    if (this.cookieDeadline && this.isActiveCookie) {
      this.initializeClock(this.counterId, this.cookieDeadline);
    }
  }

  ngOnInit() {}
}
