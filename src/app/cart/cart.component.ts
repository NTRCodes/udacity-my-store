import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product';
import { FormsModule } from '@angular/forms';
import { Observable, reduce } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartList: Product[] = [];
  total: number = 0;
  name = ''
  cartMode = true

  constructor(private buyEventService: CartService) { }

  ngOnInit() {
    this.buyEventService.cartList.subscribe(cart => this.cartList = cart);
    this.updateTotal()
  }


  submitForm() {
    this.cartMode = false;
  }

  test(product: Product) {
    console.log(product.count)
  }

  updateTotal() {
    const total = this.cartList.reduce((sum, product) => sum + (product.count || 0) * product.price, 0)
    this.total = parseFloat(total.toFixed(2));
    this.cartList.map(product => this.buyEventService.checkCount(product));
  }

}
