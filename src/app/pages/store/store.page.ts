import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import SwiperCore, { Pagination, SwiperOptions, Autoplay } from 'swiper';
import { categories, slides, products } from 'src/app/services/data/data';
@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  config: SwiperOptions = {
    pagination: { clickable: true },
    // autoplay: {
    //   delay: 5000,
    // },
  };

  categories = [];
  slides = [];
  products = [];
  activeIndex = 0;

  constructor(private router: Router) {
    this.categories = categories;
    this.slides = slides;
    this.products = products;
  }

  ngOnInit() {
    SwiperCore.use([Pagination, Autoplay]);
  }

  onSlideChange([Swiper]) {
    console.log('slide change', Swiper);
  }

  goTo(slug) {
    this.router.navigate([`/product-show/${slug}`]);
  }

  setIndex(index) {
    this.activeIndex = index;
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
