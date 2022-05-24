import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { CartComponent } from '../../components/cart/cart.component';
import SwiperCore, { Pagination, SwiperOptions, Autoplay } from 'swiper';
import { categories, slides, products } from '../../services/data/data';
import { StoreService } from '../../services/shared/store.service';
import { HelperService } from '../../services/shared/helper.service';

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
  cartSize: Number;
  cart = [];

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet,
    private store: StoreService,
    private helper: HelperService
  ) {
    this.categories = categories;
    this.slides = slides;
    this.products = this.filterByCategory(products);
    this.getCart();
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

  async showCart() {
    const modal = await this.modalCtrl.create({
      component: CartComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      mode: 'ios',
      componentProps: {
        products: this.cart,
      },
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);

    if (data?.event == 'CHECKOUT') {
      const loading = await this.helper.loading('Placing your order...');

      loading.present();

      new Promise((resolve) =>
        setTimeout(() => {
          loading.dismiss();
          this.router.navigate(['/success']);
        }, 2000)
      );
    }
  }

  getCart() {
    this.store.loadCart.subscribe((result) => {
      this.cart = result;
    });
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
