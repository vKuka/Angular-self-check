import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'tab-content',
  template: `
  <ng-template>
    <ng-content></ng-content>
  </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabContentComponent {
  @ViewChild(TemplateRef, {static: true})
  public content!: TemplateRef<any>;
}

// @Directive({
//   selector: 'tab-content',
// })
// export class TabContentComponent{
//   constructor(public content: ElementRef) { }
// }
