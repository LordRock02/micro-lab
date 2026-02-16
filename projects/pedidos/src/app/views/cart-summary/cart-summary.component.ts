import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, Product } from 'shared-lib'; // 👈 Importamos del alias compartido

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss'
})
export class CartSummaryComponent {
  
  // Inyectamos el servicio compartido
  private cartService = inject(CartService);

  // Obtenemos la lista de productos en tiempo real
  cartItems$ = this.cartService.cartItems$;

  // Calculamos el total (Suma de precios)
  getTotal(items: Product[]): number {
    return items.reduce((acc, item) => acc + item.price, 0);
  }

  // Método para borrar todo (Simular compra)
  clear() {
    alert('¡Gracias por tu compra! 💳');
    this.cartService.clearCart();
  }
}