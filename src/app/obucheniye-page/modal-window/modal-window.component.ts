import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
})
export class ModalWindowComponent implements OnInit {
  @Input() windowId: string;
  @Input() cover: string;
  @Input() formInfo: {};

  constructor() {}

  ngOnInit() {}

  close() {
    const el = document.getElementById(this.windowId);
    el.className = 'container';
  }
}
