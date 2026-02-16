const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'pedidos',

  exposes: {
    './Component': './projects/pedidos/src/app/app.component.ts',
    './Routes': './projects/pedidos/src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    "shared-lib": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  },

  sharedMappings: ['shared-lib'],

});
