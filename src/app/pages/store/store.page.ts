import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  config: SwiperOptions = {
    pagination: { clickable: true },
  };

  constructor() {}

  ngOnInit() {
    SwiperCore.use([Pagination]);
  }

  onSlideChange([Swiper]) {
    console.log('slide change', Swiper);
  }
}
