import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() buyProductEvent = new EventEmitter<Product>();

  constructor() {
    this.product = new Product();
  }

  addToCart(): void {
    this.buyProductEvent.emit(this.product)
  }
}
