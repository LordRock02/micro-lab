import { Routes } from '@angular/router';
import { CartSummaryComponent } from './views/cart-summary/cart-summary.component';

export const routes: Routes = [
  {
    path: '', // Ruta raíz del microservicio
    component: CartSummaryComponent
  }
];