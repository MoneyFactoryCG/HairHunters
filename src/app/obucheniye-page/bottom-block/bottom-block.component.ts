import { Component, OnInit } from '@angular/core';
import { ObucheniyeService } from '../services/obucheniye.service';

@Component({
  selector: 'app-bottom-block',
  templateUrl: './bottom-block.component.html',
  styleUrls: ['./bottom-block.component.scss'],
})
export class BottomBlockComponent implements OnInit {
  course;

  constructor(private obucheniyeService: ObucheniyeService) {}

  ngOnInit() {
    this.obucheniyeService.getDate().subscribe(
      res => {
        this.course = res;
      },
      error => {
        console.log(error);
      },
    );
  }
}
