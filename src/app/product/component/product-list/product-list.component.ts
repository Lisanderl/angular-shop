import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';
import { ProductModel } from '../../model/product-model';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  productSet!: Set<ProductModel>;
  constructor(private productService: ProductsService, public cartService: CartService) { }

  ngOnInit(): void {
    this.productSet = this.productService.getProducts();
  }

  onAdToCart(product: ProductModel): void {
    console.log('wow you add that item: ' + product);
    this.cartService.addProduct(product);
  }
}
