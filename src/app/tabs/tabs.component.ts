import { AfterContentChecked, AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { TabComponent } from './tab.component';
import { map, startWith } from "rxjs/operators";

@Component({
  selector: 'tabs',
  template: `
  <div>
    <div style="display: flex;">
      <button 
        *ngFor="let tab of list$ | async" 
        (click)="selectTab(tab)"
        [ngStyle]="{
          color: activeTab === tab ? 'red' : 'black'
        }"
        type="button"
      >
        <span *ngTemplateOutlet="tab.tabTitle.title"></span>
      </button>
    </div>
    <div *ngIf="activeTab">
      <span *ngTemplateOutlet="activeTab.tabContent.content"></span>
    </div>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterContentInit, AfterContentChecked {

  @ContentChildren(TabComponent)
  tabList!: QueryList<TabComponent>;

  list$!: Observable<TabComponent[]>;

  activeTab!: TabComponent;
  ngAfterContentInit() {
    this.list$ = this.tabList.changes
    .pipe(
        startWith([]),
        map(() => {
          // debugger
          return this.tabList.toArray()}),
      );
  }

  ngAfterContentChecked() {
    const hasActibeTab = this.activeTab && this.tabList.find((tab: TabComponent) => {
      return tab === this.activeTab;
    });
    if (!hasActibeTab) {
      this.activeTab = this.tabList.first;
    }
  }

  public selectTab(tab: TabComponent): void {
    if (this.activeTab === tab) {
      return;
    }

    this.activeTab = tab;
  }
}