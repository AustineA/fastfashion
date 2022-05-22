import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import SwiperCore, { Pagination, SwiperOptions, Autoplay } from 'swiper';
import { categories, slides, products } from '../../services/data/data';
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
    this.products = this.filterByCategory(products);
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

  setIndex(index, category) {
    this.activeIndex = index;
    this.products = this.filterByCategory(products, category);
  }

  filterByCategory(list, category = 'all') {
    if (category == 'all') {
      return list;
    }

    return list.filter((item) => {
      return item.category.toLowerCase() == category.toLowerCase();
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
