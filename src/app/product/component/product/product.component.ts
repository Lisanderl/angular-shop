import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../model/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  @Input() product!: ProductModel;
  @Output() productToCard: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() {
  }

  onAdd(product: ProductModel): void {
    console.log('wow you add that item: ' + product);
    this.productToCard.emit(product);
  }
}
