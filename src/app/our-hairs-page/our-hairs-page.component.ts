import { Component, OnInit, AfterViewInit } from "@angular/core";

import * as $ from "jquery";

@Component({
  selector: "app-our-hairs-page",
  templateUrl: "./our-hairs-page.component.html",
  styleUrls: ["./our-hairs-page.component.scss"]
})
export class OurHairsPageComponent implements OnInit, AfterViewInit {

  isCanPlay: boolean = false;

  constructor() {}

  ngOnInit() {}

  onInViewportChange(event) {
    $("#videoour")[0].muted = true;
    // const playPromise = $("#videoour")[0].play();

    // if (playPromise !== undefined) {
    //   playPromise
    //     .then(() => {
    //       // Automatic playback started!
    //       // Show playing UI.
    //     })
    //     .catch(error => {
    //       // Auto-play was prevented
    //       // Show paused UI.
    //     });
    // }
  }

  ngAfterViewInit() {}
}
