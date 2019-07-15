import { Component, AfterViewInit, OnInit } from "@angular/core";

import lozad from 'lozad';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit, OnInit {


  hair = [
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/1.jpg`,
      code: '18-HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/2.jpg`,
      code: '1HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/3.jpg`,
      code: '2HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/4.jpg`,
      code: '3HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/5.jpg`,
      code: '4HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/6.jpg`,
      code: '5HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/7.jpg`,
      code: '6HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/8.jpg`,
      code: '8HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/9.jpg`,
      code: '10HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/10.jpg`,
      code: '12HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/11.jpg`,
      code: '14HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/12.jpg`,
      code: '16HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/13.jpg`,
      code: '18HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/14.jpg`,
      code: '22HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/15.jpg`,
      code: '24HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/16.jpg`,
      code: '27HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/17.jpg`,
      code: 'PlatHH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/18.jpg`,
      code: '60HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/19.jpg`,
      code: '60H-HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/20.jpg`,
      code: '613HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/21.jpg`,
      code: '100HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/22.jpg`,
      code: '130HH',
      show: false
    },
    {
      img: `../../../assets/imgs/hair-palette-page/carousel/23.jpg`,
      code: '135HH',
      show: false
    },
  ];

  ngOnInit() {
  }

  ngAfterViewInit() {}

  title = "HairHunters";
}
