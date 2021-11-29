import {ChangeDetectionStrategy, Component, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'tab-title',
  template: `
  <ng-template>
    <ng-content></ng-content>
  </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabTitleComponent {
  @ViewChild(TemplateRef, {static: true})
  public title!: TemplateRef<any>;
}
