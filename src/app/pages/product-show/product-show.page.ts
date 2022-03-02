import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { Pagination, SwiperOptions, Autoplay } from 'swiper';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.page.html',
  styleUrls: ['./product-show.page.scss'],
})
export class ProductShowPage implements OnInit {
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
  sizes = ['s', 'm', 'l', 'xl'];
  quantity = 1;

  constructor(private router: Router) {}

  ngOnInit() {
    SwiperCore.use([Pagination, Autoplay]);
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
}
