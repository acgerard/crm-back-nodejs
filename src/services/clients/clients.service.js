// Initializes the `clients` service on path `/clients`
const { Clients } = require('./clients.class');
const createModel = require('../../models/clients.model');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/clients', new Clients(options, app));
};
