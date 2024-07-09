import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedataService } from './sharedata.service';
import { HttpClientModule } from '@angular/common/http';

import { CakeComponent } from './cake/cake.component';
import { OrderComponent } from './order/order.component';
import { VendorComponent } from './vendor/vendor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  
    CakeComponent,
    OrderComponent,
    VendorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SharedataService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
