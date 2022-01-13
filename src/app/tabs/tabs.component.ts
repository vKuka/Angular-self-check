import {
  AfterContentChecked,
  AfterContentInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChildren,
  QueryList
} from '@angular/core';
import {Observable} from 'rxjs';
import {TabComponent} from './tab.component';
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'tabs',
  template: `
    <div *ngIf="(list$ | async)?.length" class="tabs">
      <div class="tabs__container">
        <button
          *ngFor="let tab of list$ | async"
          (click)="selectTab(tab)"
          class="tabs__button"
          [ngClass]="{'tabs__button_active': activeTab === tab}"
          [disabled]="tab.disabled"
          type="button"
        >
          <span *ngTemplateOutlet="tab.tabTitle.title"></span>
        </button>
      </div>
      <div
        *ngIf="activeTab"
        class="tabs__content"
      >
        <span *ngTemplateOutlet="activeTab.tabContent.content"></span>
      </div>
    </div>
  `,
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterContentInit, AfterContentChecked {
  @ContentChildren(TabComponent)
  tabList!: QueryList<TabComponent>;

  list$!: Observable<TabComponent[]>;

  activeTab!: TabComponent;

  constructor(private readonly cdr: ChangeDetectorRef) {
  }

  ngAfterContentInit() {
    this.list$ = this.tabList.changes
      .pipe(
        startWith([]),
        map(() => this.tabList.toArray()),
      );
  }

  ngAfterContentChecked() {
    const hasActiveTab = this.activeTab && this.tabList.find((tab: TabComponent) => {
      return tab === this.activeTab;
    });
    if (!hasActiveTab) {
      this.activeTab = this.tabList.first;
    } else if (hasActiveTab?.disabled) {
      this.activeTab = this.firstNonDisabledTab;
    }
    this.cdr.markForCheck()
  }

  public selectTab(tab: TabComponent): void {
    if (this.activeTab === tab) {
      return;
    }

    this.activeTab = tab;
  }

  get firstNonDisabledTab(): TabComponent {
    for (let tab of this.tabList) {
      if (!tab.disabled) {
        return tab;
      }
    }
    return this.activeTab;
  }
}
