import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root' // Esto asegura que sea el MISMO servicio para toda la app (Singleton)
})
export class CartService {
  
  // 1. Variable privada que guarda los productos actuales
  private cartItems = new BehaviorSubject<Product[]>([]);
  
  // 2. Observable público para que el Header y Pedidos lo escuchen
  cartItems$ = this.cartItems.asObservable();

  // Método para agregar producto
  addToCart(product: Product) {
    const currentItems = this.cartItems.value;
    // Creamos una nueva lista con lo que había + el nuevo (Inmutabilidad)
    this.cartItems.next([...currentItems, product]);
    console.log('🛒 Producto agregado:', product.name);
  }

  // Método para limpiar el carrito (opcional por ahora)
  clearCart() {
    this.cartItems.next([]);
  }
  
  // Método para obtener el valor actual sin suscribirse
  getItems(): Product[] {
    return this.cartItems.value;
  }
}