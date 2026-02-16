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
      image: 'https://placehold.co/300x200/1e1e2f/ffffff?text=Laptop'
    },
    {
      id: 2,
      name: 'Teclado Mecánico RGB',
      price: 89.50,
      description: 'Switches azules clicky para máxima satisfacción.',
      image: 'https://placehold.co/300x200/1e1e2f/ffffff?text=Teclado'
    },
    {
      id: 3,
      name: 'Monitor UltraWide 34"',
      price: 450.00,
      description: 'Visualiza todos tus logs y terminales al mismo tiempo.',
      image: 'https://placehold.co/300x200/1e1e2f/ffffff?text=Monitor'
    },
    {
      id: 4,
      name: 'Silla Ergonómica',
      price: 299.99,
      description: 'Cuida tu espalda durante esas largas sesiones de debug.',
      image: 'https://placehold.co/300x200/1e1e2f/ffffff?text=Silla'
    },
    {
      id: 5,
      name: 'Auriculares Noise Cancelling',
      price: 199.99,
      description: 'Aíslate del mundo y concéntrate en tu código.',
      image: 'https://placehold.co/300x200/1e1e2f/ffffff?text=Audio'
    },
    {
      id: 6,
      name: 'Mug "It works on my machine"',
      price: 15.00,
      description: 'La excusa perfecta impresa en cerámica.',
      image: 'https://placehold.co/300x200/1e1e2f/ffffff?text=Mug'
    }
  ];
}