import { Directive, HostListener, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { IConfig, IfViewportSizeConfig } from './config.service';
import { IfViewportSizeService } from './if-viewport-size.service';

@Directive({
  selector: '[ifViewportSize]',
})
export class IfViewportSizeDirective implements OnInit, OnDestroy {
  @Input() ifViewportSize!: keyof IConfig | 'small';
  @Input() ifViewportSizeSize!: number;
  private hasView = false;
  destroy$ = new Subject();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private config: IfViewportSizeConfig,
    private resizer: IfViewportSizeService,
  ) {
  }

  ngOnInit(): void {
    this.resizer.resize$
      .pipe(takeUntil(this.destroy$),)
      .subscribe(this.checkSize.bind(this));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private checkSize(width: number) {
    if (!this.hasView && width >= this.size) {
      this.show();
    }

    if (this.hasView && width < this.size) {
      this.hide();
    }
  }

  private show(): void {
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.hasView = true;
  }

  private hide(): void {
    this.viewContainer.clear();
    this.hasView = false;
  }

  get size(): number {
    return this.ifViewportSizeSize || this.config[this.ifViewportSize];
  }
}