import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private buyEventService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      console.log(this.products);
    })
  }

  addToCart($event: Product) {
    this.buyEventService.addProduct($event);
  }
}
