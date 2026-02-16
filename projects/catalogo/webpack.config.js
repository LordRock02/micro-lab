const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'catalogo',

  exposes: {
    './Component': './projects/catalogo/src/app/app.component.ts',
    './Routes': './projects/catalogo/src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    "shared-lib": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  },

  sharedMappings: ['shared-lib'],

});
