import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfViewportSizeDirective } from './if-viewport-size.directive';
import { BrowserModule } from '@angular/platform-browser';
import { IfViewportSizeConfig } from './config.service';
import { IfViewportSizeService } from './if-viewport-size.service';


@NgModule({
  declarations: [
    IfViewportSizeDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [
    IfViewportSizeDirective,
  ],
  providers: [
    IfViewportSizeConfig,
    IfViewportSizeService,
  ],
})
export class IfViewportSizeModule { }
