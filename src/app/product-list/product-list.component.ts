import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import productData from '../../../data.json';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = productData;

  constructor() { }

  OnInit() {
    console.log(this.products)
  }

}
