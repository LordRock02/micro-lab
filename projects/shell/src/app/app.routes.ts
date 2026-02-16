import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
    path: 'pedidos',
    loadChildren: () => loadRemoteModule({
        type: 'manifest',
        remoteName: 'pedidos',
        exposedModule: './Routes'
      }).then(m => m.routes)
  },
  {
    path: 'catalogo',
    loadChildren: () => loadRemoteModule({
        type: 'manifest',
        remoteName: 'catalogo',
        exposedModule: './Routes'
      }).then(m => m.routes)
  }
];
