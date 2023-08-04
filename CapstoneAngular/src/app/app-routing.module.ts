import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/admin/admin.component';
import { CartComponent } from 'src/cart/cart.component';
import { HomeComponent } from 'src/home/home.component';
import { LoginComponent } from 'src/login/login.component';
import { ProfileComponent } from 'src/profile/profile.component';

const routes: Routes = [{path:'',component:HomeComponent},{path:'profile',component:ProfileComponent},
{path:'admin',component:AdminComponent},{path:'cart',component:CartComponent}, {path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
