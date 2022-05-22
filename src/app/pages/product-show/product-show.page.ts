import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions, Autoplay } from 'swiper';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { categories, slides, products } from '../../services/data/data';

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
  color = [
    { black: '' },
    { blue: '' },
    { gray: '' },
    { red: '' },
    { white: '' },
    { yellow: '' },
    { brown: '' },
  ];

  activeIndex = 0;
  quantity = 1;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    SwiperCore.use([Pagination, Autoplay]);
    this.getProduct();
  }

  getProduct() {
    const slug = this.route.snapshot.params['slug'];
    this.product = products.find((item: any) => item?.slug == slug);
    console.log(this.product);
  }

  setIndex(index) {
    this.activeIndex = index;
  }

  goTo(link) {
    this.router.navigate([link]);
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
