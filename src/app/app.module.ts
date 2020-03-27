import { NgModule } from "@angular/core";
import {
  BrowserModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { DoubleTapDirective } from "./directives/double-tap.directive";
import * as Hammer from "hammerjs";
import { HoldableDirective } from "./directives/holdable.directive";
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    press: { time: 500 }, // default: 251 ms
    pinch: { enable: false },
    rotate: { enable: false }
    // pan: {
    //   direction: Hammer.DIRECTION_ALL
    // }
  };
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
