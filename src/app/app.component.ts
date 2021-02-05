import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from './cart-module/cart/service/cart.service';
import { ProductModel } from './products-module/product/model/product-model';
import { ProductsService } from './products-module/product/service/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitleH1!: ElementRef;


  constructor(public cartService: CartService, public productService: ProductsService) {

  }
  ngAfterViewInit(): void {
    console.log(this.appTitleH1.nativeElement)
    this.appTitleH1.nativeElement.innerHTML = 'Shop app';
  }

  onAddProductToCard(model: ProductModel): void {
    console.log('wow you add that item in app: ' + model);
    this.cartService.add(model);
  }

  onClear(value: any): void {
    console.log('clear ' + value);
    this.cartService.clear();
  }

  onInput(vale: KeyboardEvent): void {
    let target = (<HTMLInputElement>vale.target);
    console.log('input event ' + target.value);
    //target.value = '';
  }
}
