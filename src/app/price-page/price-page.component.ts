import { AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.scss']
})
export class PricePageComponent implements OnInit, AfterViewInit {

  @ViewChildren('stock') childQuery;

  isStock: boolean = true;
  stockCount = 0;

  checkStocks() {
    for (let i = 0; i < this.childQuery.length; i++) {
      if (this.childQuery._results[i].isActive || this.childQuery._results[i].isActiveCookie) {
        return true;
      }
    }
    return false;
  }

  countStocks() {
    for (let i = 0; i < this.childQuery.length; i++) {
      if (this.childQuery._results[i].isActive || this.childQuery._results[i].isActiveCookie) {
        this.stockCount += 1;
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.isStock = this.checkStocks();
    this.countStocks();
  }
  

}
