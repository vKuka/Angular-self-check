import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfViewportSizeConfig } from './if-viewport-size/config.service';
import { IfViewportSizeModule } from './if-viewport-size/if-viewport-size.module';
import { TabsModule } from './tabs/tabs.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    TabsModule,
    IfViewportSizeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ifViewportSizeConfig: IfViewportSizeConfig) {
    ifViewportSizeConfig.medium = 750;
    ifViewportSizeConfig.large = 1000;
  }
 }
