import { Component } from '@angular/core';

export class Item {
  id: number;
  name: string;
}
const ITEMS: Item[] = [
  { id: 11, name: 'Eggs', price: 4.99 },
  { id: 12, name: 'Hot Dogs', price: 2.95 },
  { id: 13, name: 'Chicken', price: 1.96 }
];

const CART: Item[] = [];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{subTitle}}</h2>
    <h3>Items</h3>
    <ul class="items">
      <li *ngFor="let item of items" [class.selected]="item === selectedItem">
        {{item.name}} | {{item.price | currency:'USD':true}}
        <button (click)="onSelect(item)">Add</button>
      </li>
    </ul>
    <hr>
    <h3>Cart</h3>
    <ul class="shopping-cart">
      <li *ngFor="let item of cartItems">
        {{item.name}} | {{item.price | currency:'USD':true}}
        <button (click)="onRemove(item)">Remove</button>
      </li>
    </ul>
    <hr>
    {{cartTotal(cartItems) | currency:'USD':true}}
  `,
})

export class AppComponent {
  title = 'Grocery List';
  subTitle = 'Simple grocery list application built with Angular 2 and Redux';
  items = ITEMS;
  selectedItem: Item;

  cartItems = CART;

  onSelect(item: Item) {
    this.cartItems.push(item);
    this.selectedItem = item;
  }

  onRemove(item: Item) {
    this.cartItems.splice(this.cartItems.indexOf(item), 1);
  }

  cartTotal(cartItems: Item[]) {
    return cartItems.reduce(function(itemFirst, itemSecond) {
      return itemFirst + itemSecond.price;
    }, 0);
  }
}
