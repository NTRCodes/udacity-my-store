import { Injectable } from '@angular/core';
import productData from '../../../data.json';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return productData;
  }

  getProduct(id: number) {
    return productData.find((product: Product) => product.id === id) || productData[1];
  }
}
