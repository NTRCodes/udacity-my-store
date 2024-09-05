import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: Product;

  constructor() {
    this.product = {
      id: 0,
      name: '',
      url: '',
      description: '',
      price: 0.00
    }
  }
}
