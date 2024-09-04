import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Product List',
    component: ProductListComponent,
  },
  {
    path: 'detail/:id',
    title: 'Product Detail',
    component: ProductDetailComponent,
  },
  {
    path: 'cart',
    title: 'Cart',
    component: CartComponent,
  }
];
