import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
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
