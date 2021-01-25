import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../model/product-model';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  productSet: Set<ProductModel> = new Set<ProductModel>();

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productSet = this.productService.getProducts();
  }
}
