import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/product/model/product-model';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.sass']
})
export class CartListComponent implements OnInit {

  @Input() cartItems!: Set<ProductModel>;
  constructor() { }

  ngOnInit(): void {

  }

  onClear(): void {
    console.log('clear');
    this.cartItems.clear();
  }
}
