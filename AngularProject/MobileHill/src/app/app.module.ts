import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { ContactsPageComponent } from './components/pages/contacts-page/contacts-page.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { BasketPageComponent } from './components/pages/basket-page/basket-page.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { SearchComponent } from './components/elements/search/search.component';
import { SortComponent } from './components/elements/sort/sort.component';
import { FilterComponent } from './components/elements/filter/filter.component';
import { ProductsComponent } from './components/elements/products/products.component';
import { ProductComponent } from './components/elements/product/product.component';
import { FooterComponent } from './components/elements/footer/footer.component';
import { HeaderComponent } from './components/elements/header/header.component';
import { ModalComponent } from './components/elements/modal/modal.component';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptor } from './shared/auth.interceptor';
import { SortPipe } from './shared/pipes/sort.pipe';
import { RefDirective } from './shared/ref.directive';
import { environment } from '../environments/environment';
import { reducer } from './store/shop.reducer';
import { ShopEffects } from './store/shop.effects';

const INTERCEPTOR__PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor,
};

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    MainPageComponent,
    ContactsPageComponent,
    ProductPageComponent,
    BasketPageComponent,
    UserLayoutComponent,
    SearchComponent,
    SortComponent,
    FilterComponent,
    ProductsComponent,
    ProductComponent,
    FooterComponent,
    HeaderComponent,
    SortPipe,
    ModalComponent,
    RefDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedModule,
    NgxGalleryModule,
    NgxPaginationModule,
    StoreModule.forRoot({ shop: reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ShopEffects]),
    StoreRouterConnectingModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [INTERCEPTOR__PROVIDER],
  bootstrap: [AppComponent],
  entryComponents: [RefDirective],
})
export class AppModule {}
