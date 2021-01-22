import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  productSet: any;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productSet = this.productService.getProducts();
  }
}
