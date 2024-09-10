import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { Product } from './models/Product';
import { CartService } from './services/cart.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductListComponent,
    HeaderComponent,
    CartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title: string = 'udacity-my-store';
  cart: Product[] = [];

  constructor(private buyEventService: CartService) { }

  ngOnInit() {
    this.buyEventService.buyEvent.subscribe(product => this.addToCart(product))
  }

  addToCart(product: Product) {
    alert(`${product.name} has been added to cart.`)
    this.buyEventService.addProduct(product)
  }
}
