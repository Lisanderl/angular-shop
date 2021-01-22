import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/product/model/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Set<ProductModel> = new Set<ProductModel>();

  get items(): Set<ProductModel> {
    return this.cartItems;
  }

  addProduct(model: ProductModel): Set<ProductModel> {
    this.items.add(model);
    return this.items;
  }
}
