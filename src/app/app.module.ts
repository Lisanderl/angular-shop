import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';

import { ProductsModuleModule } from './products-module/products-module.module';
import { CartModuleModule } from './cart-module/cart-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule,
    ProductsModuleModule,
    CartModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
