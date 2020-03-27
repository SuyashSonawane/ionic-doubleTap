import {
  Directive,
  EventEmitter,
  HostListener,
  Output,
  ElementRef
} from "@angular/core";

@Directive({
  selector: "[doubleTapable]"
})
export class DoubleTapDirective {
  @Output() doubleTap = new EventEmitter();
  @Output() tripleTap = new EventEmitter();
  constructor(private el: ElementRef) {
    console.log("4");
  }

  @HostListener("tap", ["$event"])
  onTap(e) {
    // console.log(e);
    this.el.nativeElement.style.transform =
      "translateY(2px) scale(0.9999999999)";
    setTimeout(() => {
      this.el.nativeElement.style.transform = "translateY(0)";
    }, 150);
    if (e.tapCount === 2) {
      this.doubleTap.emit(e);
    }
    if (e.tapCount === 3) this.tripleTap.emit(e);
  }
}
