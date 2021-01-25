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

  // Не надо добавлять зависимость - каждая зависимость усложняет компонент.
  // Этот компонент получает данные для отображения, пусть генерит аутпут родителю,
  // когда его надо добавить в корзину
  constructor(private cartService: CartService) {
  }

  onAdd(product: ProductModel): void {
    console.log('wow you add that item: ' + product);
    this.cartService.addProduct(product);
  }
}
