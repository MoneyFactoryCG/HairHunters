import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';
// import { SwiperOptions } from 'swiper';
import {
  SwiperConfigInterface,
  SwiperComponent,
  SwiperDirective,
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-stock-carousel',
  templateUrl: './stock-carousel.component.html',
  styleUrls: ['./stock-carousel.component.scss'],
})
export class StockCarouselComponent implements OnInit, AfterViewInit {
  @ViewChildren('stock') childQuery;

  isStock: boolean[] = [true, true, true];
  isStocks: boolean = true;

  @ViewChild(SwiperComponent, { static: false })
  componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false })
  directiveRef?: SwiperDirective;

  config: SwiperConfigInterface = {
    pagination: { el: '.stock-swiper-pagination', clickable: true },
    loop: false,
    loopedSlides: 1,
    speed: 1000,
    freeMode: false,
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,
  };

  checkStock() {
    for (let i = 0; i < this.childQuery.length; i++) {
      if (
        this.childQuery._results[i].isActive ||
        this.childQuery._results[i].isActiveCookie
      ) {
        this.isStock[i] = true;
      } else {
        this.isStock[i] = false;
      }
    }
  }

  checkStocks() {
    for (let i = 0; i < this.childQuery.length; i++) {
      if (
        this.childQuery._results[i].isActive ||
        this.childQuery._results[i].isActiveCookie
      ) {
        return true;
      }
    }
    return false;
  }

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.checkStock();
    this.isStocks = this.checkStocks();
    this.directiveRef.update();
    console.log(this.childQuery);
  }
}
