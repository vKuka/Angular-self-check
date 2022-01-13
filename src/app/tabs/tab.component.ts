import { ContentChild, Directive, Input } from '@angular/core';
import { TabContentComponent } from './tab-content.component';
import { TabTitleComponent } from './tab-title.component';

@Directive({
  selector: 'tab',
})
export class TabComponent {
  @Input()
  public disabled: boolean = false;

  @ContentChild(TabTitleComponent, { static: true })
  public tabTitle!: TabTitleComponent;

  @ContentChild(TabContentComponent, { static: true })
  public tabContent!: TabContentComponent;
}
