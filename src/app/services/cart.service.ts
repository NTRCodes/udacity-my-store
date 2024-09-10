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

  addProduct(newProduct: Product) {
    const itemExists = this.cartListSubject.value.find(product => product.id === newProduct.id);
    if (itemExists) {
      const updatedCart = this.cartListSubject.value.reduce<Product[]>((cart, product) => {
        if (product.id === newProduct.id) {
          return [...cart, { ...product, count: product.count + newProduct.count }];
        } else {
          return [...cart, product];
        }
      }, []);
      this.cartListSubject.next(updatedCart);
    } else {
      this.cartListSubject.value.push(newProduct);
    }
    alert(`${newProduct.name} has been added to the Cart!`);
  }

  checkCount(product: Product) {
    if (product.count <= 0) {
      const newCart = this.cartListSubject.value.filter(cartProduct => product.id !== cartProduct.id);
      this.cartListSubject.next(newCart);
    }
  }
}
