import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighLighted = false;

  @Output()
  toggleHighLight = new EventEmitter();

  constructor() { 
    console.log('Directive created ...');
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
     return this.isHighLighted;
  }

  @HostBinding('attr.disabled')
  get disabled() {
     return true;
  }

  @HostListener('mouseover')
  mouseOver() {
     this.isHighLighted = true;
     this.toggleHighLight.emit(this.isHighLighted);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighLighted = false;
    this.toggleHighLight.emit(this.isHighLighted);
  }

  toggle() {
     this.isHighLighted = !this.isHighLighted;
     this.toggleHighLight.emit(this.isHighLighted);
  }

}
