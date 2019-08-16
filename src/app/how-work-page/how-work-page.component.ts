import { Component, OnInit, HostListener, AfterViewInit } from "@angular/core";

import * as $ from "jquery";

@Component({
  selector: "app-how-work-page",
  templateUrl: "./how-work-page.component.html",
  styleUrls: ["./how-work-page.component.scss"]
})
export class HowWorkPageComponent implements OnInit, AfterViewInit {
  leftText = [
    {
      text:
        "Вы приходите на бесплатную консультацию, которая займет всего 15-20 мин"
    },
    {
      text:
        "Мастер научит Вас: На что нужно обращать внимание при выборе волос? Как отличить хорошие волосы от плохих? И как понять не обманывают ли вас при продаже волос?"
    },
    {
      text: "Убеждаетесь в качестве наших волос"
    },
    {
      text:
        "Примеряете понравившийся Вам цвет, длину и  любуетесь на свой новый образ."
    },
    {
      text:
        "Мастер подбирает оптимальное кол-во волос именно Вам, для красивого и безопасного наращивания, исходя из выбранной длины, густоты и состояния Ваших волос."
    },
    {
      text:
        "Мы взвешиваем выбранные волосы, считаем точную их стоимость и стоимость работы."
    }
  ];
  rightText = [
    {
      text:
        "Консультация абсолютно бесплатна, Вы нам ничего не должны и поэтому спокойно принимаете решение: Да-Да, нет-нет, подумаю."
    },
    {
      text:
        "Мастер записывает Вас на любую свободную дату и время. Вы оставляете предоплату за место наличными или на карту (без предоплаты - мы держим бронь и не записываем других желающих на Ваше время, только в течении суток). Если у вас появились непредвиденные обстоятельства, Вы сообщаете нам, не позднее, чем за 3 дня до записи и мы вернем Вам предоплату."
    },
    {
      text:
        "Вовремя приходите в записанное время и через 3-4 часа восхищаетесь своими шикарными длинными волосами."
    },
    {
      text: "Пишите нам восторженный отзыв"
    }
  ];

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
      (100 - (((window.innerHeight - ((window.pageYOffset + window.innerHeight)-top)) * 100)/window.innerHeight) >= 60) &&
      (100 - (((window.innerHeight - ((window.pageYOffset + window.innerHeight)-top)) * 100)/window.innerHeight) <= (60 + ((height*100)/window.innerHeight)))
    );
  }

  activeSteps() {
    const steps = $(".step");
    for(let i = 0; i < steps.length; i++) {
      if (this.elementInViewport(steps[i]) ) {
        $(steps[i].children[2]).css({
          background: '#E8CBFF',
          transition: 'background 0s linear'
          
        })
        $(steps[i].children[1]).css({
          'text-shadow': '0px 0px 4px rgba(0, 0, 0, 0.1)'
        })
      } else {
        $(steps[i].children[2]).css({
          background: '#FFF',
          transition: 'background 2s ease'
        })
        $(steps[i].children[1]).css({
          'text-shadow': '0px 0px 4px rgba(0, 0, 0, 0)'
        })
      }
    }
  }

  constructor() {}

  ngAfterViewInit() {
    this.elem = document.getElementById("how-work-page-container");
  }
  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  handleScroll() {
      if(window.innerWidth <= 1160) {
        this.activeSteps();
      }   
  }
}
