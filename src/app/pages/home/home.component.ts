import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { ProductDetailsComponent } from '../../components/product-details/product-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, ProductDetailsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  product:any
  products = [
    { id: 1, name: 'Angular For Beginners', details: '1111' },
    { id: 2, name: 'Angular Core Deep Dive', details: '2222' },
    { id: 3, name: 'Angular Forms In Depth', details: '3333' },
  ];
  getData(product: any) {
   this.product=product
  }
}
