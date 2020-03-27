import { Directive, EventEmitter, HostListener, Output } from "@angular/core";
import { Subject, Observable, interval } from "rxjs";
import { takeUntil, tap, filter } from "rxjs/operators";

@Directive({
  selector: "[appHoldable]"
})
export class HoldableDirective {
  @Output() holdtime: EventEmitter<number> = new EventEmitter();
  state: Subject<string> = new Subject();
  cancel: Observable<string>;
  constructor() {
    this.cancel = this.state.pipe(
      filter(v => v === "cancel"),
      tap(v => {
        console.log("hold stop");
        this.holdtime.emit(0);
      })
    );
  }

  @HostListener("mouseup", ["event"])
  @HostListener("mouseleave", ["event"])
  onExit() {
    this.state.next("cancel");
  }
  @HostListener("mousedown", ["event"])
  onHold() {
    console.log("started hold");
    this.state.next("start");
    const n = 100;
    interval(n)
      .pipe(
        takeUntil(this.cancel),
        tap(v => {
          this.holdtime.emit(v * n);
        })
      )
      .subscribe();
  }
}
