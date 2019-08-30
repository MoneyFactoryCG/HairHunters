import { OverviewService } from './overview.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../shared/interfaces';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {
  searchValue = '';
  sortName: string | null = null;
  sortValue: string | null = null;
  listOfStatus = [
    { text: 'Новый', value: 'new' },
    { text: 'Запись', value: 'sign' },
    { text: 'Предоплата', value: 'prepay' },
    { text: 'Подумаю', value: 'think' },
    { text: 'Отмена', value: 'cancel' }
  ];
  listOfSearchType: string[] = [];
  listOfData: Order[] = [];
  listOfDisplayData;

  updateInfo;

  constructor(private overviewService: OverviewService) {}

  ngOnDestroy() {
    console.log(this);
  }

  convertDateToUTC(date) {
    const utc = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds()
    );
    return utc;
  }

  convertDateToGMT(utc, local) {
    const localTime = new Date(utc.getTime() + local * 60 * 60 * 1000);
    return localTime;
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  getOrders() {
    this.overviewService.getOrders().subscribe(
      res => {
        this.listOfData = res;
        this.listOfDisplayData = this.listOfData;
        this.listOfDisplayData.forEach((order, i) => {
          const d = new Date(this.listOfData[i].date);
          order.date = d.toLocaleString();
        });
        console.log(this.listOfData);
      },
      error => {
        console.log(error);
      }
    );
  }

  startInfoUpdate(time) {
    return setInterval(() => {
      this.getOrders();
    }, time);
  }

  stopInfoUpdate() {
    clearInterval(this.updateInfo);
  }

  ngOnInit() {
    this.getOrders();
    this.updateInfo = this.startInfoUpdate(30000);
  }

  reset(): void {
    this.searchValue = '';
    this.getOrders();
    this.updateInfo = this.startInfoUpdate(30000);
  }

  sort(sortName: string, value: string): void {
    this.sortName = sortName;
    this.sortValue = value;
    this.search();
  }

  search(): void {
    this.stopInfoUpdate();
    const filterFunc = (item: Order) => {
      return (
        (this.listOfSearchType.length
          ? this.listOfSearchType.some(
              type => item.list[0].type.indexOf(type) !== -1
            )
          : true) && item.list[0].name.indexOf(this.searchValue) !== -1
      );
    };
    const data = this.listOfData.filter((item: Order) => filterFunc(item));
    this.listOfDisplayData = data;
    // this.listOfDisplayData = data.sort((a, b) =>
    //   this.sortValue === 'ascend'
    //     ? a[this.sortName!] > b[this.sortName!]
    //       ? 1
    //       : -1
    //     : b[this.sortName!] > a[this.sortName!]
    //     ? 1
    //     : -1
    // );
  }
}
