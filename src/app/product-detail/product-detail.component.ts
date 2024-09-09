import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})

export class ProductDetailComponent implements OnInit {
  product: Product = new Product();

  constructor(private route: ActivatedRoute, private productService: ProductService, private buyEventService: CartService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || 99;
    this.product = this.productService.getProduct(Number(id));
  }

  buyProduct(): void {
    this.buyEventService.updateCartList(this.product);
  }

}

