import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-obucheniye-page',
  templateUrl: './obucheniye-page.component.html',
  styleUrls: ['./obucheniye-page.component.scss'],
})
export class ObucheniyePageComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _renderer2: Renderer2,
  ) {}
  ngOnInit() {}
}
