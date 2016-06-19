import { Component } from '@angular/core';
export class Item {
  id: number;
  name: string;
}
const ITEMS: Item[] = [
  { id: 11, name: 'Eggs' },
  { id: 12, name: 'Hot Dogs' },
  { id: 13, name: 'Chicken' }
];
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{subTitle}}</h2>
    <ul class="items">
      <li *ngFor="let item of items"
        [class.selected]="item === selecteditem"
        (click)="onSelect(item)">
        {{item.name}}<span class="pencil"></span>
      </li>
    </ul>
  `,
  styles: [`
  `]
})
export class AppComponent {
  title = 'Grocery List';
  subTitle = 'Simple grocery list application built with Angular 2 and Redux';
  items = ITEMS;
}
