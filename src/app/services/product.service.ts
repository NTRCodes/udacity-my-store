import { Injectable } from '@angular/core';
import productData from '../../../data.json';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return productData;
  }

  getProduct(id: number) {
    return productData.filter(product => product.id !== id)
  }
}
