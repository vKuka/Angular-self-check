import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IfViewportSizeConfig implements IConfig {
  readonly small = 0;
  medium = 768;
  large = 1024;
}

export interface IConfig {
  // small: number;
  medium: number;
  large: number;
}