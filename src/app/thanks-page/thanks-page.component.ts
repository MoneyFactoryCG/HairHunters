import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-thanks-page',
  templateUrl: './thanks-page.component.html',
  styleUrls: ['./thanks-page.component.scss']
})
export class ThanksPageComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _renderer2: Renderer2
  ) {}

  ngOnInit() {
    const s1 = this._renderer2.createElement('script');
    s1.text = `
      window.LEELOO = function() {
        window.LEELOO_INIT = { id: "5a48e93b66f7cd04eaf73bd4" };
        var js = document.createElement("script");
        js.src = "https://app.leeloo.ai/init.js";
        js.async = true;
        document.getElementsByTagName("head")[0].appendChild(js);
      };
      LEELOO();`;
    this._renderer2.appendChild(this._document.querySelector('body'), s1);
    const s2 = this._renderer2.createElement('script');
    s2.text = `
      window.LEELOO_LEADGENTOOLS = (window.LEELOO_LEADGENTOOLS || []).concat(
        "flgl7h"
      );`;
    this._renderer2.appendChild(this._document.querySelector('body'), s2);
  }
}
