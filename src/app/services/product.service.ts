import { Injectable } from '@angular/core';
import productData from '../../../public/data.json';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('data.json');
  }

  getProduct(id: number) {
    return productData.find((product: Product) => product.id === id) || productData[1];
  }
}
