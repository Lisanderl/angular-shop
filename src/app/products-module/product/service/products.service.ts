import { Injectable } from '@angular/core';
import { ProductModel } from '../model/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Array<ProductModel>;
  constructor() {
    this.products = new Array<ProductModel>();
    this.products.push(new ProductModel(1, 'Book', 'How to become successful', 99.90));
    this.products.push(new ProductModel(2, 'Coffe Machine', 'Simple filter Coffe Machine', 199.90));
    this.products.push(new ProductModel(3, 'Cup', 'Cup for hot liquids', 50.90));
    this.products.push(new ProductModel(4, 'Cup', 'Cup for cold liquids', 30.90));
  }

  getProducts(): Array<ProductModel> {
    return this.products;
  }

  add(model: ProductModel): void {
    this.products.push(model);
  }
}
