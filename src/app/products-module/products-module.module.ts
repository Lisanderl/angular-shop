import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/component/product/product.component';
import { ProductListComponent } from './product/component/product-list/product-list.component';
import { ProductsService } from './product/service/products.service';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  // Зарегистрирован через свой собственный декоратор
  // providers: [
  //   ProductsService
  // ],
  imports: [
    CommonModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModuleModule { }
