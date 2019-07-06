import { Component, OnInit } from "@angular/core";

import * as $ from "jquery";

@Component({
  selector: "app-reviews-page",
  templateUrl: "./reviews-page.component.html",
  styleUrls: ["./reviews-page.component.scss"]
})
export class ReviewsPageComponent implements OnInit {
  constructor() {}

  handleClick(event: Event) {
    if (event["path"][0].className === "header") {
      if (
        !$("." + event["path"][1].classList[1] + " .content").hasClass("toggle")
      ) {
        $(".block .arrow").removeClass("active");
        $(".block .content").removeClass("toggle");
        setTimeout(() => {
          var offset = $(event["path"][1]).offset();
          offset.top -= 20;
          $("html, body").animate({
            scrollTop: offset.top
          });
        }, 800);
        $("." + event["path"][1].classList[1] + " .content").addClass("toggle");
        $("." + event["path"][1].classList[1] + " .arrow").addClass("active");
      } else {
        $("." + event["path"][1].classList[1] + " .content").removeClass(
          "toggle"
        );
        $("." + event["path"][1].classList[1] + " .arrow").removeClass(
          "active"
        );
      }
    }
    if (event["path"][1].className === "header") {
      if (
        !$("." + event["path"][2].classList[1] + " .content").hasClass("toggle")
      ) {
        $(".block .arrow").removeClass("active");
        $(".block .content").removeClass("toggle");
        setTimeout(() => {
          var offset = $(event["path"][2]).offset();
          offset.top -= 20;
          $("html, body").animate({
            scrollTop: offset.top
          });
        }, 800);
        $("." + event["path"][2].classList[1] + " .content").addClass("toggle");
        $("." + event["path"][2].classList[1] + " .arrow").addClass("active");
      } else {
        $("." + event["path"][2].classList[1] + " .content").removeClass(
          "toggle"
        );
        $("." + event["path"][2].classList[1] + " .arrow").removeClass(
          "active"
        );
      }
    }
    if (event["path"][2].className === "header") {
      if (
        !$("." + event["path"][3].classList[1] + " .content").hasClass("toggle")
      ) {
        $(".block .arrow").removeClass("active");
        $(".block .content").removeClass("toggle");
        setTimeout(() => {
          var offset = $(event["path"][3]).offset();
          offset.top -= 20;
          $("html, body").animate({
            scrollTop: offset.top
          });
        }, 800);
        $("." + event["path"][3].classList[1] + " .content").addClass("toggle");
        $("." + event["path"][3].classList[1] + " .arrow").addClass("active");
      } else {
        $("." + event["path"][3].classList[1] + " .content").removeClass(
          "toggle"
        );
        $("." + event["path"][3].classList[1] + " .arrow").removeClass(
          "active"
        );
      }
    }

    // if (this.isToggle === false && event["path"][0].className === 'header') {
    //   this.isToggle = true;
    //   $("." + event["path"][1].classList[1] + " .content").slideDown().css("display","flex");
    //   $("." + event["path"][1].classList[1] + " .arrow").addClass("active");
    // } else if (this.isToggle === true && event["path"][0].className === 'header') {
    //   this.isToggle = false;
    //   $("." + event["path"][1].classList[1] + " .content").slideUp();
    //   $("." + event["path"][1].classList[1] + " .arrow").removeClass("active");
    // }
    // if (this.isToggle === false && event["path"][1].className === 'header') {
    //   this.isToggle = true;
    //   $("." + event["path"][2].classList[1] + " .content").slideToggle(1000).css("display","flex");
    //   $("." + event["path"][2].classList[1] + " .arrow").addClass("active");
    // } else if (this.isToggle === true && event["path"][1].className === 'header') {
    //   this.isToggle = false;
    //   $("." + event["path"][2].classList[1] + " .content").slideUp(1000);
    //   $("." + event["path"][2].classList[1] + " .arrow").removeClass("active");
    // }
    // if (this.isToggle === false && event["path"][2].className === 'header') {
    //   this.isToggle = true;
    //   $("." + event["path"][3].classList[1] + " .content").slideToggle(1000).css("display","flex");
    //   $("." + event["path"][3].classList[1] + " .arrow").addClass("active");
    // } else if (this.isToggle === true && event["path"][2].className === 'header') {
    //   this.isToggle = false;
    //   $("." + event["path"][3].classList[1] + " .content").slideUp(1000);
    //   $("." + event["path"][3].classList[1] + " .arrow").removeClass("active");
    // }
    //console.log("Click", event["path"]);
  }

  ngOnInit() {}
}
