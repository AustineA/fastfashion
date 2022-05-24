import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  products = [
    {
      category: 'Jackets',
      color: 'green',
      description:
        'Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur rmus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      fav: true,
      featuredImage: '../../../assets/images/product2.jpeg',
      link: 'product-show',
      price: 85.99,
      quantity: 2,
      selectedSize: 'm',
      sizes: ['s', 'm'],
      slug: 'etiam-magna',
      title: 'Etiam Magna',
    },
    {
      category: 'Jackets',
      color: 'green',
      description:
        'Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur rmus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      fav: true,
      featuredImage: '../../../assets/images/product6.jpeg',
      link: 'product-show',
      price: 260.99,
      quantity: 3,
      selectedSize: 'm',
      sizes: ['s', 'm', 'l', 'xl'],
      slug: 'vestibulum-cursus',
      title: 'Vestibulum Cursus',
    },
  ];

  private _cart = new BehaviorSubject<any>(this.products);
  cart = this._cart.asObservable();

  private _wishList = new BehaviorSubject<any>(this.products);
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
