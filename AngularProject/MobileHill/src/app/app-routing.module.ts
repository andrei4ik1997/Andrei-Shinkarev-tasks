import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { BasketPageComponent } from './components/pages/basket-page/basket-page.component';
import { ContactsPageComponent } from './components/pages/contacts-page/contacts-page.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: '', redirectTo: '/main', pathMatch: 'full' },
      { path: 'main', component: MainPageComponent },
      {
        path: 'about',
        component: AboutPageComponent,
      },
      {
        path: 'contacts',
        component: ContactsPageComponent,
      },
      {
        path: 'basket',
        component: BasketPageComponent,
      },
      { path: 'main/:id', component: ProductPageComponent },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', redirectTo: '/main' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
