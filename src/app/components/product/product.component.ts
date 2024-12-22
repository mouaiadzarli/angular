import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) product!: any;

  @Output() action: EventEmitter<any> = new EventEmitter();

  itemClicked() {
    this.action.emit(this.product);
  }
}
