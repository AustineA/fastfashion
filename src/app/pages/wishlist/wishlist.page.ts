import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../services/shared/store.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  products = [];
  constructor(private store: StoreService, private router: Router) {
    this.getWishList();
  }

  ngOnInit() {}

  getWishList() {
    this.store.loadWishList.subscribe((result) => {
      this.products = result;
    });
  }

  goTo(slug) {
    this.router.navigate([`/product-show/${slug}`]);
  }

  removeFromList(slug) {
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
}
