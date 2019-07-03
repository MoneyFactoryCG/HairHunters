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

    
    if (this.isToggle === false) {
      
      $("." + event["path"][1].classList[1] + " .content").slideToggle(1000).css("display","flex");
      this.isToggle = true;
      $("." + event["path"][1].classList[1] + " .arrow").addClass("active");
    } else {
      $("." + event["path"][1].classList[1] + " .content").slideUp(1000);
      this.isToggle = false;
      $("." + event["path"][1].classList[1] + " .arrow").removeClass("active");
    }
    //console.log("Click", event["path"]);
  }

  ngOnInit() {}
}
