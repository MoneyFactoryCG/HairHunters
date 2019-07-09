import { Component, AfterViewInit, OnInit } from "@angular/core";
declare var TweenMax: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit, OnInit {
  ngOnInit() {}

  ngAfterViewInit() {}

  title = "HairHunters";
}
