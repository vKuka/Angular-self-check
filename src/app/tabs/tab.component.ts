import { ContentChild, Directive } from '@angular/core';
import { TabContentComponent } from './tab-content.component';
import { TabTitleComponent } from './tab-title.component';

@Directive({
  selector: 'tab',
})
export class TabComponent {
  @ContentChild(TabTitleComponent, { static: true })
  public tabTitle!: TabTitleComponent;

  @ContentChild(TabContentComponent, { static: true })
  public tabContent!: TabContentComponent;
}
