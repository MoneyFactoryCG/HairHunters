import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-stock-card",
  templateUrl: "./stock-card.component.html",
  styleUrls: ["./stock-card.component.scss"]
})
export class StockCardComponent implements OnInit, AfterViewInit {
  @Input() deadline;
  @Input() counterId?: string;
  @Input() title: string;
  @Input() price: string;
  @Input() img: string;

  getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse("" + new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
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

    const updateClock = () => {
      const t = this.getTimeRemaining(endtime);
      daysSpan.innerHTML = "" + t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    };

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  constructor() {}

  ngAfterViewInit() {
    this.initializeClock(this.counterId, this.deadline);
  }

  ngOnInit() {
    console.log(this.counterId);
  }
}
