import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Products {
  products: [];
}

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _cart = new BehaviorSubject<any>([]);
  cart = this._cart.asObservable();

  constructor() {}

  setCart(value) {
    this._cart.next([...this._cart.value, value]);
  }

  updateCart(value) {
    this._cart.next(value);
  }

  get loadCart() {
    return this.cart;
  }
}
