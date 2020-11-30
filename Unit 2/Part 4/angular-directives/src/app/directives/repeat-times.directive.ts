import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adRepeatTimes]'
})
export class RepeatTimesDirective implements OnChanges {
  @Input('adRepeatTimes') times!: number;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.viewContainer.clear();
    for (let i = 0; i < this.times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        current: i + 1,
      });
    }
  }



}
