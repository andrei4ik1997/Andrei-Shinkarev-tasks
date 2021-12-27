import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './services/auth.guard';
import { OrdersPageComponent } from './components/orders-page/orders-page.component';
import { CallBackPageComponent } from './components/call-back-page/call-back-page.component';
import { SubscribersPageComponent } from './components/subscribers-page/subscribers-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      {
        path: 'dashboard',
        component: DashboardPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'create',
        component: CreatePageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'orders',
        component: OrdersPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'callBack',
        component: CallBackPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'subscribers',
        component: SubscribersPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'post/:id/edit',
        component: EditPageComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    EditPageComponent,
    CreatePageComponent,
    DashboardPageComponent,
    OrdersPageComponent,
    CallBackPageComponent,
    SubscribersPageComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AdminModule {}
