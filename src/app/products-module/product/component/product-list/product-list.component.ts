import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart-module/cart/service/cart.service';
import { ProductModel } from '../../model/product-model';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnChanges {
  @Output() productToCard: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Input() products!: Array<ProductModel>;
  constructor() { }

  ngOnChanges(): void {

  }

  onAdToCart(product: ProductModel): void {
    console.log('wow you add that item: ' + product);
    this.productToCard.emit(product);
  }
}
