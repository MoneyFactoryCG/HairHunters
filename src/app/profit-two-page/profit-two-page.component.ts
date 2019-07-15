import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profit-two-page',
  templateUrl: './profit-two-page.component.html',
  styleUrls: ['./profit-two-page.component.scss']
})
export class ProfitTwoPageComponent implements OnInit {

  profits: any = [
    {
      img: "../../assets/imgs/profit-two-page/1.svg",
      text:
        "Только натуральные волосы славянского типа"
    },
    {
      img: "../../assets/imgs/profit-two-page/2.svg",
      text:
        "Можно выравнивать плойкой,<br>Можно накручивать локоном,<br>Можно сушить феном"
    },
    {
      img: "../../assets/imgs/profit-two-page/3.svg",
      text:
        "Можно тонировать<br>и окрашивать"
    },
    {
      img: "../../assets/imgs/profit-two-page/4.svg",
      text:
        "Делать любые прически"
    },
    {
      img: "../../assets/imgs/profit-two-page/5.svg",
      text: "Плотные концы<br>Делать кератиновое<br>выпрямление и биозавивку"
    },
    {
      img: "../../assets/imgs/profit-two-page/6.svg",
      text: "Ни чем не обработанные - Без<br>«улучшателей» вида и блеска<br>Мягкие и шелковистые"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}