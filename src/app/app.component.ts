import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  visible: boolean = false;
  toggles = [
    true,
    true,
  ];  
  tabs: number[] = [1, 2];
  testing: any = [
    {
      question: 'Какой цвет? ⬛',
      options: ['Red', 'Black'],
      correct: 'Black',
    },
    {
      question: '1+1=?',
      correct: 2
    },
  ]
}
