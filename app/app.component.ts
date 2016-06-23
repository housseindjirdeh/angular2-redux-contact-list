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

const CART: Item[] = [];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{subTitle}}</h2>
    <ul class="items">
      <li *ngFor="let item of items" [class.selected]="item === selectedItem">
        {{item.name}}
        <span class="pencil" (click)="onSelect(item)"> .. </span>
      </li>
    </ul>
    <ul class="shopping-cart">
      <li *ngFor="let item of cartItems">
        {{item.name}}
        <span class="pencil" (click)="onRemove(item)"> .. </span>
      </li>
    </ul>
  `,
})

export class AppComponent {
  title = 'Grocery List';
  subTitle = 'Simple grocery list application built with Angular 2 and Redux';
  items = ITEMS;
  cartItems = CART;
  selectedItem: Item;

  onSelect(item: Item) {
    this.cartItems.push(item);
    this.selectedItem = item;
  }

  onRemove(item: Item) {
    this.cartItems.splice(this.cartItems.indexOf(item), 1);
  }
}
