// Initializes the `clients` service on path `/clients`
const { Products } = require('./products.class');
const createModel = require('../../models/products.model');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/clients', new Products(options, app));
};
