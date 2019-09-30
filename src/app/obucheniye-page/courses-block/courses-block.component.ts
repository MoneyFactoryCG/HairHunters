import { Component, OnInit, Input } from '@angular/core';
import { ObucheniyeService } from '../services/obucheniye.service';

@Component({
  selector: 'app-courses-block',
  templateUrl: './courses-block.component.html',
  styleUrls: ['./courses-block.component.scss'],
})
export class CoursesBlockComponent implements OnInit {
  @Input() isPrice: boolean = true;

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
