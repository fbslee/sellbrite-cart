import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class ShopService {
  counter: number = 0;
  total: number = 0;
  cart: Array<any> = [];
  shop: boolean = true;
  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) { }

  addItem(item){
    if(this.cart.indexOf(item) === -1){
      item.amount = 1;
      this.cart.push(item);
    } else {
      this.cart[this.cart.indexOf(item)].amount += 1;
    }
    this.total += item.price;
    this.counter++;
    this.total = Math.round(this.total * 100) / 100;
  }

  removeItem(item){
    this.total -= (item.amount * item.price);
    this.counter -= item.amount;
    this.cart.splice((this.cart.indexOf(item)),1);
    this.total = Math.round(this.total * 100) / 100;
  }

  navigateTo(location){
    if(location === 'shop'){
      this.shop = true;
    } else if(location === 'cart'){
      this.shop = false;
    }
    this.router.navigate([location]);
  }
}
