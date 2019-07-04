import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-reviews-page",
  templateUrl: "./reviews-page.component.html",
  styleUrls: ["./reviews-page.component.scss"]
})
export class ReviewsPageComponent implements OnInit {

  constructor() {}

  isToggle: boolean = false;

  handleClick(event: Event) {

    console.log(event);
    
    if (this.isToggle === false && event["path"][0].className === 'header') {
      this.isToggle = true;
      $("." + event["path"][1].classList[1] + " .content").slideToggle(1000).css("display","flex");
      $("." + event["path"][1].classList[1] + " .arrow").addClass("active");
    } else if (this.isToggle === true && event["path"][0].className === 'header') {
      this.isToggle = false;
      $("." + event["path"][1].classList[1] + " .content").slideUp(1000);
      $("." + event["path"][1].classList[1] + " .arrow").removeClass("active");
    }
    if (this.isToggle === false && event["path"][1].className === 'header') {
      this.isToggle = true;
      $("." + event["path"][2].classList[1] + " .content").slideToggle(1000).css("display","flex");
      $("." + event["path"][2].classList[1] + " .arrow").addClass("active");
    } else if (this.isToggle === true && event["path"][1].className === 'header') {
      this.isToggle = false;
      $("." + event["path"][2].classList[1] + " .content").slideUp(1000);
      $("." + event["path"][2].classList[1] + " .arrow").removeClass("active");
    }
    if (this.isToggle === false && event["path"][2].className === 'header') {
      this.isToggle = true;
      $("." + event["path"][3].classList[1] + " .content").slideToggle(1000).css("display","flex");
      $("." + event["path"][3].classList[1] + " .arrow").addClass("active");
    } else if (this.isToggle === true && event["path"][2].className === 'header') {
      this.isToggle = false;
      $("." + event["path"][3].classList[1] + " .content").slideUp(1000);
      $("." + event["path"][3].classList[1] + " .arrow").removeClass("active");
    }
    //console.log("Click", event["path"]);
  }

  ngOnInit() {}
}
