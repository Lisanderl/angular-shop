import { Injectable } from '@angular/core';
import { ProductModel } from '../model/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Set<ProductModel>;
  constructor() {
    this.products = new Set<ProductModel>();
    this.products.add(new ProductModel(1, 'Book', 'How to become successful', 99.90));
    this.products.add(new ProductModel(2, 'Coffe Machine', 'Simple filter Coffe Machine', 199.90));
    this.products.add(new ProductModel(3, 'Cup', 'Cup for hot liquids', 50.90));
  }

  getProducts(): Set<ProductModel> {
    return this.products;
  }
}
