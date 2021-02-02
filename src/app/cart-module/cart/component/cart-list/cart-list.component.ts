import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from 'src/app/products-module/product/model/product-model';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.sass']
})
export class CartListComponent {

  @Input() cartItems!: Array<ProductModel>;
  @Input() totalCost!: number;
  @Input() totalAmount!: number;
  @Output() clear: EventEmitter<string> = new EventEmitter();
  constructor() { }

  onClear(): void {
    this.clear.emit('clean up');
  }
}
