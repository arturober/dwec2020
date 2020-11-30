import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[adSetColor]'
})
export class SetColorDirective {
  private isSet = false;
  @Input('adSetColor') color = '';
  @Input() textColor = 'black';

  constructor() { }

  @HostBinding('style.backgroundColor') styleBgColor!: string;
  @HostBinding('style.color') styleColor!: string;

  @HostListener('click')
  onClick(): void {
    if (this.isSet) {
      this.styleBgColor = '';
      this.styleColor = '';
    } else {
      this.styleBgColor = this.color;
      this.styleColor = this.textColor;
    }
    this.isSet = !this.isSet;
  }
}
