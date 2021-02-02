import { Component } from '@angular/core';
import { CartService } from './cart-module/cart/service/cart.service';
import { ProductModel } from './products-module/product/model/product-model';
import { ProductsService } from './products-module/product/service/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'shop';

  constructor(public cartService: CartService, public productService: ProductsService) {

  }

  onAddProductToCard(model: ProductModel): void {
    console.log('wow you add that item in app: ' + model);
    this.cartService.add(model);
  }

  onClear(value: any): void {
    console.log('clear ' + value);
    this.cartService.clear();
  }
}
