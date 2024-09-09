import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private buyProductSubject = new Subject<Product>();
  buyEvent = this.buyProductSubject.asObservable();

  private cartListSubject = new BehaviorSubject<Product[]>([]);
  cartList = this.cartListSubject.asObservable();

  private cartTotalSubject = new Subject<number>;
  carTotal = this.cartTotalSubject.asObservable();

  emitBuyEvent(product: Product) {
    this.buyProductSubject.next(product)
  }

  updateCartList(product: Product) {
    const currentCart = this.cartListSubject.value;
    const updatedCart = [...currentCart, product]
    this.cartListSubject.next(updatedCart)
  }
}
