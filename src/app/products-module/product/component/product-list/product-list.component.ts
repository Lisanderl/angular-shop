import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ProductModel } from '../../model/product-model';


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
