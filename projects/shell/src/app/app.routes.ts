import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';//segúrate de tener este import si tienes un Home

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // La página de inicio (portada)
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    // 👇 ESTO ES LO IMPORTANTE:
    // 1. 'catalogo' debe coincidir con el nombre en "remotes" del webpack.config.js
    // 2. './Routes' debe coincidir con el "exposes" del webpack.config.js del Catálogo
    loadChildren: () => import('catalogo/Routes').then(m => m.routes)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('pedidos/Routes').then(m => m.routes)
  }
];