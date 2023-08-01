import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductContainerComponent } from '../product-container/product-container.component';
import { ProductComponent } from '../product/product.component';
import { CategoryButtonContainerComponent } from '../category-button-container/category-button-container.component';
import { CategoryButtonComponent } from '../category-button/category-button.component';
import { CartComponent } from '../cart/cart.component';
import { ProfileComponent } from '../profile/profile.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductContainerComponent,
    ProductComponent,
    CategoryButtonContainerComponent,
    CategoryButtonComponent,
    CartComponent,
    ProfileComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
