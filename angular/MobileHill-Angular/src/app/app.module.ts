import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { ContactsPageComponent } from './components/pages/contacts-page/contacts-page.component';
import { ItemPageComponent } from './components/pages/item-page/item-page.component';
import { BasketPageComponent } from './components/pages/basket-page/basket-page.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { SearchComponent } from './components/elements/search/search.component';
import { SortComponent } from './components/elements/sort/sort.component';
import { FilterComponent } from './components/elements/filter/filter.component';
import { ItemsComponent } from './components/elements/items/items.component';
import { CardComponent } from './components/elements/card/card.component';
import { FooterComponent } from './components/elements/footer/footer.component';
import { HeaderComponent } from './components/elements/header/header.component';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptor } from './shared/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

const INTERCEPTOR__PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    MainPageComponent,
    ContactsPageComponent,
    ItemPageComponent,
    BasketPageComponent,
    UserLayoutComponent,
    SearchComponent,
    SortComponent,
    FilterComponent,
    ItemsComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedModule,
    NgxGalleryModule 
  ],
  providers: [INTERCEPTOR__PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
