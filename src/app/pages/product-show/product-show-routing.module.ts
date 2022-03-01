import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductShowPage } from './product-show.page';

const routes: Routes = [
  {
    path: '',
    component: ProductShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductShowPageRoutingModule {}
