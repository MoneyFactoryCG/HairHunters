import { OverviewService } from './overview.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/interfaces';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  searchValue = '';
  sortName: string | null = null;
  sortValue: string | null = null;
  listOfFilterType = [
    { text: 'London', value: 'London' },
    { text: 'Sidney', value: 'Sidney' }
  ];
  listOfSearchType: string[] = [];
  listOfData: Order[] = [];
  listOfDisplayData;

  constructor(private overviewService: OverviewService) {
  }

  ngOnInit() {
    this.overviewService.getOrders().subscribe(
      res => {
        this.listOfData = res;
        this.listOfDisplayData = this.listOfData;
        console.log(this.listOfData);
      },
      error => {
        console.log(error);
      }
    );
    setInterval(() => {
      this.overviewService.getOrders().subscribe(
        res => {
          this.listOfData = res;
          this.listOfDisplayData = this.listOfData;
          console.log(this.listOfData);
        },
        error => {
          console.log(error);
        }
      );
    }, 30000);
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  sort(sortName: string, value: string): void {
    this.sortName = sortName;
    this.sortValue = value;
    this.search();
  }

  filterTypeChange(value: string[]): void {
    this.listOfSearchType = value;
    this.search();
  }

  search(): void {
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
    this.listOfDisplayData = data.sort((a, b) =>
      this.sortValue === 'ascend'
        ? a[this.sortName!] > b[this.sortName!]
          ? 1
          : -1
        : b[this.sortName!] > a[this.sortName!]
        ? 1
        : -1
    );
  }
}
