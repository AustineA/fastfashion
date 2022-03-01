import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { ProductShowPageRoutingModule } from './product-show-routing.module';

import { ProductShowPage } from './product-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductShowPageRoutingModule,
    SwiperModule,
  ],
  declarations: [ProductShowPage],
})
export class ProductShowPageModule {}
