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
import { AdminComponent } from '../admin/admin.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { FormsModule } from '@angular/forms';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { HttpClientModule }  from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartPageComponent } from '../cart-page/cart-page.component';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

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
    AdminComponent,
    UserInfoComponent,
    TopBarComponent,
    LoginComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
