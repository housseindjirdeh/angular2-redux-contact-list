import { Component } from '@angular/core';

export class Item {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><h2>{{subTitle}}</h2><h3>{{item.name}}</h3>'
  template:`
	  <h1>{{title}}</h1>
	  <h2>{{subTitle}}</h2>
	  <div><label>id: </label>{{item.id}}</div>
	  <div><label>name: </label>{{item.name}}</div>
	  `
})

export class AppComponent { 
	title = 'Shopping Cart'
	subTitle = 'Simple shopping cart example with Angular 2 and Redux'

	item: Item = {
		id: 1,
		name: "Eggs"
	}
}
