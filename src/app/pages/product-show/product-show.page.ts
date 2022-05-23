import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions, Autoplay } from 'swiper';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { wishlist, products, cart } from '../../services/data/data';
import { HelperService } from '../../services/shared/helper.service';
import { StoreService } from '../../services/shared/store.service';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.page.html',
  styleUrls: ['./product-show.page.scss'],
})
export class ProductShowPage implements OnInit {
  product: any;
  config: SwiperOptions = {
    pagination: { clickable: true },
    // autoplay: {
    //   delay: 5000,
    // },
  };
  color: string;
  selectedSize: string;

  quantity = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private helper: HelperService,
    private store: StoreService
  ) {}

  ngOnInit() {
    SwiperCore.use([Pagination, Autoplay]);
    this.getProduct();
  }

  getProduct() {
    const slug = this.route.snapshot.params['slug'];
    this.product = products.find((item: any) => item?.slug == slug);
  }

  setSize(size) {
    this.selectedSize = size;
  }

  goTo(link) {
    this.router.navigate([link]);
  }

  addToFav() {
    this.product.fav = !this.product?.fav;
    const message = this.product.fav
      ? `${this.product.title} added to wishlist`
      : `${this.product.title} removed to wishlist`;

    const color = this.product.fav ? 'light' : 'warning';
    this.helper.aToast(message, color);

    wishlist.push(this.product);
  }

  addToCart() {
    const item = {
      ...this.product,
      color: this.color,
      selectedSize: this.selectedSize,
      quantity: this.quantity,
    };

    const message = `${this.product.title} added to Cart`;
    this.helper.aToast(message, 'success');

    // cart.push(item);
    this.store.setCart(item);
  }

  increaseQty() {
    this.quantity = ++this.quantity;
  }

  decreaseQty() {
    if (this.quantity == 1) return;
    this.quantity = --this.quantity;
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
