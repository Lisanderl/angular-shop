import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart/component/cart-list/cart-list.component';
import { CartService } from './cart/service/cart.service';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    CartListComponent],
  // Зарегистрирован через свой декоратор
  // providers: [
  //   CartService
  // ],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports: [CartListComponent]
})
export class CartModuleModule { }
