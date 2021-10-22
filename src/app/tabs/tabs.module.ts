import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';
import { TabTitleComponent } from './tab-title.component';
import { TabContentComponent } from './tab-content.component';

const TABS = [
  TabsComponent,
  TabComponent,
  TabTitleComponent,
  TabContentComponent
];

@NgModule({
  imports: [CommonModule],
  declarations: TABS,
  exports: TABS
})
export class TabsModule{}
