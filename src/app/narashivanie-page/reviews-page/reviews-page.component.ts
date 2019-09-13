import { Component, OnInit } from "@angular/core";

import * as $ from "jquery";

@Component({
  selector: "app-reviews-page",
  templateUrl: "./reviews-page.component.html",
  styleUrls: ["./reviews-page.component.scss"]
})
export class ReviewsPageComponent implements OnInit {
  constructor() {}

  // handleClick(event) {
  //   if (event["path"][0].className === "need-know-header") {
  //     if (
  //       !$("." + event["path"][1].classList[1] + " .content").hasClass("toggle")
  //     ) {
  //       $(".block .arrow").removeClass("active");
  //       $(".block .content").removeClass("toggle");
  //       setTimeout(() => {
  //         var offset = $(event["path"][1]).offset();
  //         offset.top -= 20;
  //         $("html, body").animate({
  //           scrollTop: offset.top
  //         });
  //       }, 800);
  //       $("." + event["path"][1].classList[1] + " .content").addClass("toggle");
  //       $("." + event["path"][1].classList[1] + " .arrow").addClass("active");
  //     } else {
  //       $("." + event["path"][1].classList[1] + " .content").removeClass(
  //         "toggle"
  //       );
  //       $("." + event["path"][1].classList[1] + " .arrow").removeClass(
  //         "active"
  //       );
  //     }
  //   }
  //   if (event["path"][1].className === "need-know-header") {
  //     if (
  //       !$("." + event["path"][2].classList[1] + " .content").hasClass("toggle")
  //     ) {
  //       $(".block .arrow").removeClass("active");
  //       $(".block .content").removeClass("toggle");
  //       setTimeout(() => {
  //         var offset = $(event["path"][2]).offset();
  //         offset.top -= 20;
  //         $("html, body").animate({
  //           scrollTop: offset.top
  //         });
  //       }, 800);
  //       $("." + event["path"][2].classList[1] + " .content").addClass("toggle");
  //       $("." + event["path"][2].classList[1] + " .arrow").addClass("active");
  //     } else {
  //       $("." + event["path"][2].classList[1] + " .content").removeClass(
  //         "toggle"
  //       );
  //       $("." + event["path"][2].classList[1] + " .arrow").removeClass(
  //         "active"
  //       );
  //     }
  //   }
  //   if (event["path"][2].className === "need-know-header") {
  //     if (
  //       !$("." + event["path"][3].classList[1] + " .content").hasClass("toggle")
  //     ) {
  //       $(".block .arrow").removeClass("active");
  //       $(".block .content").removeClass("toggle");
  //       setTimeout(() => {
  //         var offset = $(event["path"][3]).offset();
  //         offset.top -= 20;
  //         $("html, body").animate({
  //           scrollTop: offset.top
  //         });
  //       }, 800);
  //       $("." + event["path"][3].classList[1] + " .content").addClass("toggle");
  //       $("." + event["path"][3].classList[1] + " .arrow").addClass("active");
  //     } else {
  //       $("." + event["path"][3].classList[1] + " .content").removeClass(
  //         "toggle"
  //       );
  //       $("." + event["path"][3].classList[1] + " .arrow").removeClass(
  //         "active"
  //       );
  //     }
  //   }
  // }

  // handleClick(event) {

  //   console.log(event)

  //   if (event.target != undefined) {
  //     if ((event.target.className === "need-know-header")) {
  //       console.log("first")
  //       if (
  //         !$(
  //           "." +
  //             event.target.nextSibling.offsetParent.classList[1] +
  //             " .content"
  //         ).hasClass("toggle")
  //       ) {
  //         $(".block .arrow").removeClass("active");
  //         $(".block .content").removeClass("toggle");
  //         setTimeout(() => {
  //           var offset = $(event.target.nextSibling.offsetParent).offset();
  //           offset.top -= 100;
  //           $("html, body").animate({
  //             scrollTop: offset.top
  //           });
  //         }, 800);
  //         $(
  //           "." +
  //             event.target.nextSibling.offsetParent.classList[1] +
  //             " .content"
  //         ).addClass("toggle");
  //         $(
  //           "." + event.target.nextSibling.offsetParent.classList[1] + " .arrow"
  //         ).addClass("active");
  //       } else {
  //         $(
  //           "." +
  //             event.target.nextSibling.offsetParent.classList[1] +
  //             " .content"
  //         ).removeClass("toggle");
  //         $(
  //           "." + event.target.nextSibling.offsetParent.classList[1] + " .arrow"
  //         ).removeClass("active");
  //       }
  //     }
  //     if (event.target.offsetParent.className === "need-know-header") {
  //       console.log("second")
  //       if (
  //         !$(
  //           "." +
  //             event.target.offsetParent.nextSibling.offsetParent.classList[1] +
  //             " .content"
  //         ).hasClass("toggle")
  //       ) {
  //         $(".block .arrow").removeClass("active");
  //         $(".block .content").removeClass("toggle");
  //         setTimeout(() => {
  //           var offset = $(event.target.offsetParent.nextSibling.offsetParent).offset();
  //           offset.top -= 100;
  //           $("html, body").animate({
  //             scrollTop: offset.top
  //           });
  //         }, 800);
  //         $(
  //           "." +
  //             event.target.offsetParent.nextSibling.offsetParent.classList[1] +
  //             " .content"
  //         ).addClass("toggle");
  //         $(
  //           "." +
  //             event.target.offsetParent.nextSibling.offsetParent.classList[1] +
  //             " .arrow"
  //         ).addClass("active");
  //       } else {
  //         $(
  //           "." +
  //             event.target.offsetParent.nextSibling.offsetParent.classList[1] +
  //             " .content"
  //         ).removeClass("toggle");
  //         $(
  //           "." +
  //             event.target.offsetParent.nextSibling.offsetParent.classList[1] +
  //             " .arrow"
  //         ).removeClass("active");
  //       }
  //     }
  //   }
  // }

  // handleClick(event) {

  //   console.log(event)

  //   if (event.target != undefined) {
  //     if ((event.target.className === "need-know-header")) {
  //       console.log("first")
  //       if (
  //         !$(
  //           "." +
  //             event.target.nextSibling.offsetParent.classList[1] +
  //             " .content"
  //         ).hasClass("toggle")
  //       ) {
  //         $(".block .arrow").removeClass("active");
  //         $(".block .content").removeClass("toggle");
  //         setTimeout(() => {
  //           var offset = $(event.target.nextSibling.offsetParent).offset();
  //           offset.top -= 100;
  //           $("html, body").animate({
  //             scrollTop: offset.top
  //           });
  //         }, 800);
  //         $(
  //           "." +
  //             event.target.nextSibling.offsetParent.classList[1] +
  //             " .content"
  //         ).addClass("toggle");
  //         $(
  //           "." + event.target.nextSibling.offsetParent.classList[1] + " .arrow"
  //         ).addClass("active");
  //       } else {
  //         $(
  //           "." +
  //             event.target.nextSibling.offsetParent.classList[1] +
  //             " .content"
  //         ).removeClass("toggle");
  //         $(
  //           "." + event.target.nextSibling.offsetParent.classList[1] + " .arrow"
  //         ).removeClass("active");
  //       }
  //     }
  //     if (event.target.offsetParent.className === "need-know-header") {
  //       console.log("second")
  //       if (
  //         !$(
  //           "." +
  //             event.target.offsetParent.nextSibling.offsetParent.classList[1] +
  //             " .content"
  //         ).hasClass("toggle")
  //       ) {
  //         $(".block .arrow").removeClass("active");
  //         $(".block .content").removeClass("toggle");
  //         setTimeout(() => {
  //           var offset = $(event.target.offsetParent.nextSibling.offsetParent).offset();
  //           offset.top -= 100;
  //           $("html, body").animate({
  //             scrollTop: offset.top
  //           });
  //         }, 800);
  //         $(
  //           "." +
  //             event.target.offsetParent.nextSibling.offsetParent.classList[1] +
  //             " .content"
  //         ).addClass("toggle");
  //         $(
  //           "." +
  //             event.target.offsetParent.nextSibling.offsetParent.classList[1] +
  //             " .arrow"
  //         ).addClass("active");
  //       } else {
  //         $(
  //           "." +
  //             event.target.offsetParent.nextSibling.offsetParent.classList[1] +
  //             " .content"
  //         ).removeClass("toggle");
  //         $(
  //           "." +
  //             event.target.offsetParent.nextSibling.offsetParent.classList[1] +
  //             " .arrow"
  //         ).removeClass("active");
  //       }
  //     }
  //   }
  // }

  handleClick(event) {

    console.log(event)

    if (event.target != undefined) {
      if ((event.target.className === "need-know-header")) {
        console.log("first")
        if (
          !$(
            "." +
              event.target.nextSibling.offsetParent.classList[1] +
              " .content"
          ).hasClass("toggle")
        ) {
          $(".block .arrow").removeClass("active");
          $(".block .content").removeClass("toggle");
          setTimeout(() => {
            var offset = $(event.target.nextSibling.offsetParent).offset();
            offset.top -= 100;
            $("html, body").animate({
              scrollTop: offset.top
            });
          }, 800);
          $(
            "." +
              event.target.nextSibling.offsetParent.classList[1] +
              " .content"
          ).addClass("toggle");
          $(
            "." + event.target.nextSibling.offsetParent.classList[1] + " .arrow"
          ).addClass("active");
        } else {
          $(
            "." +
              event.target.nextSibling.offsetParent.classList[1] +
              " .content"
          ).removeClass("toggle");
          $(
            "." + event.target.nextSibling.offsetParent.classList[1] + " .arrow"
          ).removeClass("active");
        }
      }
      if (event.target.offsetParent.className === "need-know-header") {
        console.log("second")
        if (
          !$(
            "." +
              event.target.offsetParent.nextSibling.offsetParent.classList[1] +
              " .content"
          ).hasClass("toggle")
        ) {
          $(".block .arrow").removeClass("active");
          $(".block .content").removeClass("toggle");
          setTimeout(() => {
            var offset = $(event.target.offsetParent.nextSibling.offsetParent).offset();
            offset.top -= 100;
            $("html, body").animate({
              scrollTop: offset.top
            });
          }, 800);
          $(
            "." +
              event.target.offsetParent.nextSibling.offsetParent.classList[1] +
              " .content"
          ).addClass("toggle");
          $(
            "." +
              event.target.offsetParent.nextSibling.offsetParent.classList[1] +
              " .arrow"
          ).addClass("active");
        } else {
          $(
            "." +
              event.target.offsetParent.nextSibling.offsetParent.classList[1] +
              " .content"
          ).removeClass("toggle");
          $(
            "." +
              event.target.offsetParent.nextSibling.offsetParent.classList[1] +
              " .arrow"
          ).removeClass("active");
        }
      }
    }
  }

  ngOnInit() {}
}
