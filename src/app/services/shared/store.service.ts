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

  private _wishList = new BehaviorSubject<any>([]);
  wishList = this._wishList.asObservable();

  constructor() {}

  setCart(value) {
    this._cart.next([...this._cart.value, value]);
  }

  setWishList(value) {
    this._wishList.next([...this._wishList.value, value]);
  }

  updateCart(value) {
    this._cart.next(value);
  }
  updateWishList(value) {
    this._wishList.next(value);
  }

  get loadCart() {
    return this.cart;
  }

  get loadWishList() {
    return this.wishList;
  }
}
