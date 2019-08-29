import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  searchValue = '';
  sortName: string | null = null;
  sortValue: string | null = null;
  listOfFilterType = [{ text: 'London', value: 'London' }, { text: 'Sidney', value: 'Sidney' }];
  listOfSearchType: string[] = [];
  listOfData: Array<{ name: string; phone: string; type: string; [key: string]: string | number }> = [];
  listOfDisplayData = [...this.listOfData];

  constructor() {}

  ngOnInit() {}

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
    const filterFunc = (item: { name: string; phone: string; type: string; }) => {
      return (
        (this.listOfSearchType.length
          ? this.listOfSearchType.some(address => item.type.indexOf(address) !== -1)
          : true) && item.name.indexOf(this.searchValue) !== -1
      );
    };
    const data = this.listOfData.filter((item: { name: string; phone: string; type: string; }) => filterFunc(item));
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
