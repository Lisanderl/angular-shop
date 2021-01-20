import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../model/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent  {
  @Input()
  product!: ProductModel;
}
