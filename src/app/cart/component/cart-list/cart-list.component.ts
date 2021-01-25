import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/product/model/product-model';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.sass']
})
export class CartListComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

  get items(): Set<ProductModel> {
    return this.cartService.items;
  }

  onClear(): void {
    console.log('clear');
    this.cartService.items.clear();
  }
}
