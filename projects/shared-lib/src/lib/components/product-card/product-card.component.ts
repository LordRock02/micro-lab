import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para formatear moneda (pipe currency)
import { Product } from '../../models/product.interface';

@Component({
  selector: 'lib-product-card',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  // El signo ! indica que este valor vendrá obligatoriamente desde el padre
  @Input() product!: Product;

  addToCart() {
    console.log('Agregado al carrito:', this.product.name);
    // Más adelante conectaremos esto con el servicio real
  }
}