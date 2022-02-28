import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
import { categories, slides, products } from 'src/app/services/data/data';
@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  config: SwiperOptions = {
    pagination: { clickable: true },
  };

  categories = [];
  slides = [];
  products = [];

  constructor() {
    this.categories = categories;
    this.slides = slides;
    this.products = products;
  }

  ngOnInit() {
    SwiperCore.use([Pagination]);
  }

  onSlideChange([Swiper]) {
    console.log('slide change', Swiper);
  }
}
