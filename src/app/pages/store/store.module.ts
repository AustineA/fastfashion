import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './store-routing.module';
import { SwiperModule } from 'swiper/angular';

import { StorePage } from './store.page';
import { CartComponent } from '../../components/cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorePageRoutingModule,
    SwiperModule,
  ],
  declarations: [StorePage, CartComponent],
})
export class StorePageModule {}
