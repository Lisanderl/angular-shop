import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products-module/product/model/product-model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Array<ProductModel> = [];

  get items(): Array<ProductModel> {
    return this.cartItems;
  }

  add(model: ProductModel): Array<ProductModel> {
    this.items.push(model);
    return this.items;
  }

  clear(): void {
    this.cartItems = [];
  }

  getCountOfProducs(): number {
    return this.cartItems.length;
  }

  getTotalAmountOfProducs(): number {
    return this.cartItems.reduce((sum, val) => sum + val.price, 0);
  }
}
