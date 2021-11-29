import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  accordions: boolean[] = [
    true,
    true,
  ];
  isTabVisible: boolean = false;
  tabs: number[] = [1, 2];

  addTab(): void {
    this.tabs.push((this.tabs.slice(-1)[0] || 0) + 1)
  }

  toggleAccordionTask(index: number) {
    this.accordions[index] = !this.accordions[index];
  }

  toggleTabVisibility() {
    this.isTabVisible = !this.isTabVisible;
  }

  removeTab(): void {
    this.tabs.splice(-1,1)
  }
}
