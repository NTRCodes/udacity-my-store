import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }
}
