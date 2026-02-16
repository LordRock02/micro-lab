import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// 👇 AQUÍ ESTÁ LA MAGIA: Usamos el nombre 'shared-lib' en vez de la ruta larga
import { ProductCardComponent, Product } from 'shared-lib'; 

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], 
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop Developer Pro',
      price: 1299.99,
      description: 'Potente laptop con 32GB RAM ideal para microservicios.',
      // Imagen de una MacBook pro o similar
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Teclado Mecánico RGB',
      price: 89.50,
      description: 'Switches azules clicky para máxima satisfacción.',
      // Imagen de un teclado colorido
      image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Monitor UltraWide 34"',
      price: 450.00,
      description: 'Visualiza todos tus logs y terminales al mismo tiempo.',
      // Imagen de un setup con monitor ancho
      image: 'https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'Silla Ergonómica',
      price: 299.99,
      description: 'Cuida tu espalda durante esas largas sesiones de debug.',
      // Imagen de silla de oficina moderna
      image: 'https://versuscolombia.co/wp-content/uploads/2025/08/11.png'
    },
    {
      id: 5,
      name: 'Auriculares Noise Cancelling',
      price: 199.99,
      description: 'Aíslate del mundo y concéntrate en tu código.',
      // Imagen de auriculares premium
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      name: 'Mug de Café Desarrollador',
      price: 15.00,
      description: 'Combustible esencial para escribir buen código.',
      // Imagen de una taza de café junto a código
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_755017-MLU72042529746_102023-F.webp'
    }
  ];
}