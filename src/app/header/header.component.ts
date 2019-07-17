import { Component, OnInit, HostListener } from "@angular/core";

import * as $ from "jquery";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;

  @HostListener("window:scroll", ["$event"])

  fixedHeader() {
    if ($(window).scrollTop() > 30) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  }

  openMenu() {
    if (!this.isOpen) {
      $(".hamburger").addClass("active");
      $(".nav-hamburger").css({
        transform: "translateX(0)"
      });
      $("html").css({
        overflow: "hidden"
      });
      this.isOpen = true;
    } else {
      $(".hamburger").removeClass("active");
      $(".nav-hamburger").css({
        transform: "translateX(105%)"
      });
      $("html").css({
        overflow: "auto"
      });
      this.isOpen = false;
    }
  }

  constructor() {}

  ngOnInit() {}
}
