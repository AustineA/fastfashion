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

  constructor(private router: Router) {}

  ngOnInit() {
    SwiperCore.use([Pagination, Autoplay]);
  }

  goTo(link) {
    this.router.navigate([link]);
  }
}
