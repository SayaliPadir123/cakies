import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakeComponent } from './cake/cake.component';
import { OrderComponent } from './order/order.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
  {
    path:'vendor',
    component:VendorComponent
  },
  {
    path:'cake',
    component:CakeComponent
  },
  {
    path:'order',
    component:OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
