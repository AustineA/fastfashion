import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,

    children: [
      {
        path: 'store',
        loadChildren: () =>
          import('../pages/store/store.module').then((m) => m.StorePageModule),
      },
      {
        path: 'inbox',
        loadChildren: () =>
          import('../pages/inbox/inbox.module').then((m) => m.InboxPageModule),
      },
      {
        path: 'wishlist',
        loadChildren: () =>
          import('../pages/wishlist/wishlist.module').then(
            (m) => m.WishlistPageModule
          ),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../pages/account/account.module').then(
            (m) => m.AccountPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/store',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/store',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
