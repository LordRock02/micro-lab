import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component'; // Importar

export const routes: Routes = [
  {
    path: '', // Ruta raíz del microservicio
    component: ListComponent
  }
];