import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/shared/store.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  products = [];
  constructor(private store: StoreService) {
    this.getOrders();
  }

  ngOnInit() {}

  getOrders() {
    this.store.loadWishList.subscribe((result) => {
      this.products = result;
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
}
