import { Component, OnInit } from '@angular/core';
import { cart } from '../../services/data/data';
import { ModalController } from '@ionic/angular';
import { StoreService } from '../../services/shared/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products;
  constructor(
    private modalCtrl: ModalController,
    private store: StoreService
  ) {}

  ngOnInit() {
    this.products = [...this.products, ...cart];
  }

  increaseQty(product) {
    return (product.quantity = ++product.quantity);
  }

  decreaseQty(product) {
    if (product.quantity == 1) return;
    return (product.quantity = --product.quantity);
  }

  deleteFromCart(slug) {
    this.products = this.products.filter((product) => {
      return product.slug != slug;
    });
  }

  format(value, currency = 'USD') {
    return new Intl.NumberFormat('en-US', <any>{
      style: 'currency',
      currency: currency,
      currencySign: 'accounting',
      signDisplay: 'auto',
    }).format(value);
  }

  ionViewDidLeave() {
    this.store.updateCart(this.products);
  }
}
