import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  title = "1";
  constructor() {}
  d() {
    this.title = " double Tap";
  }
  t() {
    this.title = " triple Tap";
  }
  p(e) {
    console.log(e);
    this.title = e.velocity;
  }
}
