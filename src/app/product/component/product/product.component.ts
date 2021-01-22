import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';
import { ProductModel } from '../../model/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  @Input()
  product!: ProductModel;

  constructor(private cartService: CartService) {
  }

  onAdd(product: ProductModel): void {
    console.log('wow you add that item: ' + product);
    this.cartService.addProduct(product);
  }
}
