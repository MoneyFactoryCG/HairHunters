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

  t: Number;

  constructor(private cookieService: CookieService) {}

  getTimeRemaining(endtime) {
    let seconds;
    let minutes;
    let hours;
    let days;
    let t;

    if (this.deadline) {
      t = Date.parse(endtime) - Date.parse("" + new Date());
    }

    if (
      this.cookieDeadline &&
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
      this.cookieDeadline &&
      this.cookieService.get("deadline" + this.counterId)
    ) {
      t =
        endtime * 60 * 60 * 1000 +
        +this.cookieService.get("deadline" + this.counterId) -
        Date.parse("" + new Date());
        if (t <= 0) {
          this.t = 0;
        }
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
      const increment = 100 / 15;
      if (time <= 15) {
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
      if (time > 15 && time <= 30) {
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
      if (time > 30 && time <= 45) {
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
      if (time > 45 && time <= 60) {
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
    if (this.deadline) {
      this.initializeClock(this.counterId, this.deadline);
    }
    if (this.cookieDeadline  && this.t != 0) {
      this.initializeClock(this.counterId, this.cookieDeadline);
    }
  }

  ngOnInit() {}
}
