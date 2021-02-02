import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart/component/cart-list/cart-list.component';
import { CartService } from './cart/service/cart.service';

@NgModule({
  declarations: [
    CartListComponent],
  providers: [
    CartService
  ],
  imports: [
    CommonModule
  ],
  exports: [CartListComponent]
})
export class CartModuleModule { }
