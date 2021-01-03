module.exports = function (app) {
  const modelName = 'products';
  const mongooseClient = app.get('mongooseClient');
  const {Schema} = mongooseClient;
  const schema = new Schema({
    code: {
      type: String,
      required: [true, 'Code is required']
    },
    first: {
      type: String,
      required: [true, 'Name is required']
    },
    description: {
      type: String,
      required: false
    },

  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }

  return mongooseClient.model(modelName, schema);
};
