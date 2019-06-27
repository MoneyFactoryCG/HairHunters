import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profit-one-page",
  templateUrl: "./profit-one-page.component.html",
  styleUrls: ["./profit-one-page.component.scss"]
})
export class ProfitOnePageComponent implements OnInit {
  profits: any = [
    {
      img: "",
      title: "Профессиональная<br>консультация",
      text:
        "На которой вы узнаете: Как отличить хорошие волосы от плохих? Как  правильно подобрать волосы? Как при правильном уходе отрастить свои волосы?"
    },
    {
      img: "",
      title: "Безопасное<br>наращивание",
      text:
        "Опытные мастера правильно подберут цвет, необходимое кол-во и разместят волосы без переходов. Сделают правильную оттяжку и возьмут нужную прядь волос, чтобы не оборвать Ваши."
    },
    {
      img: "",
      title: "Качественные<br>материалы",
      text:
        "Наращивание делается на качественный дорогой материал, из которого со временем не начнут вылазить волосы и он не разрушается при окрашивании."
    },
    {
      img: "",
      title: "Выгодные<br>и доступно",
      text:
        "Мы фабрика производитель, что позволяет клиентам и мастерам получать волосы наилучшего качества и по доступной цене, без накрутки посредников.<br><br>Коррекция делается раз в 2-4 месяца и обходится не дороже маникюра за этот период."
    },
    {
      img: "",
      title: "Наращивание<br>микрокапсулами",
      text: "За фиксированную стоимость, наши профессиональные мастера наращивают исключительно микрокапсулами, размером с рисинку, они незаметны, удобные и гладкие, при необходимости комбинируя с Нано-капсулами в безопасных зонах."
    },
    {
      img: "",
      title: "Холодное наращивание<br>биогелем",
      text: "Новейшая технология в индустрии наращивания волос. Она позволяет безопасно делать невидимые капсулки, прочно скрепляя волосы без их потери. Но она огромной квалификации, и если мастер сделать хоть малейшее движение не так, то это принесет огромный дискомфорт во время носки, а возможно и навредит вашим волосам!"
    },
    {
      img: "",
      title: "Студия по наращиванию<br>№1 в г.Харьков",
      text: "Опыт работы наших мастеров категории Стандарт+ от 1 года, категории ТОП мастер 5 лет. Это ежедневная работа по 1-2 наращивания у каждого мастера. Мы дорожим своей репутацией, именно поэтому у нас почти все расписано на месяц вперед, и за прошедший 2018 год, только  выставленных в Instagram - более 900 работ."
    },
    {
      img: "",
      title: "Чисто и уютно",
      text: "Красивейшая студия в самом центре города. В работе мы используем только одноразовые полотенца и дезинфицируем инструменты после каждогоклиента."
    },
    {
      img: "",
      title: "Выгляди<br>неотразимо",
      text: "С помощью наращивания волос вы будете шикарно выглядеть исможете отрастить свои волосы. Так же наращивание внесет разнообразие в Вашу личную жизнь, поможет выделиться и произвести впечатление на окружающих, и своего мужчину."
    },
    {
      img: "",
      title: "Гарантия на волосы<br>и работу",
      text: "Мы профессионалы, поэтому даем гарантию на свою работу и волосы на волосы - 3 года!"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
