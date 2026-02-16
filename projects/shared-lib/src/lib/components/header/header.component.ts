import { Component, inject } from '@angular/core'; // 👈 Agrega inject
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common'; // 👈 Necesario para el pipe 'async'
import { CartService } from '../../services/cart.service'; // 👈 Importa el servicio

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive], // 👈 Agrega CommonModule
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  private cartService = inject(CartService);

  // Creamos un Observable directo al contador
  // Esto se actualizará SOLO automágicamente
  cartCount$ = this.cartService.cartItems$; 
}