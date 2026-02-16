import { Component, Input, inject } from '@angular/core'; // 👈 Agrega inject
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.interface';
import { CartService } from '../../services/cart.service'; // 👈 Importa el servicio

@Component({
  selector: 'lib-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;
  
  // 👇 Inyección moderna de dependencias
  private cartService = inject(CartService);

  addToCart() {
    // Llamamos al cerebro para guardar el producto
    this.cartService.addToCart(this.product);
  }
}