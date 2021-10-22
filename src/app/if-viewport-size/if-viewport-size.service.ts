import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';

@Injectable()
export class IfViewportSizeService {
  readonly resize$ = fromEvent(window, 'resize')
    .pipe(
      startWith(window.innerWidth),
      map(() => window.innerWidth),
      distinctUntilChanged(),
    );
}
