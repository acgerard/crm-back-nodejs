require('mongoose-type-email');

module.exports = function (app) {
  const modelName = 'clients';
  const mongooseClient = app.get('mongooseClient');
  const {Schema} = mongooseClient;
  const schema = new Schema({
    title: {
      type: String,
      required: [true, 'Title (Mr/Mme) is required']
    },
    name: {
      first: {
        type: String,
        required: [true, 'First Name is required']
      },
      last: {
        type: String,
        required: [true, 'Last Name is required']
      }
    },
    email: {
      pro: {
        type: String,
        required: false
      },
      perso: {
        type: String,
        required: false
      }
    },
    phone: {
      type: String,
      required: false,
    },
    company: {
      type: String,
      required: false
    },
    dtcf_contact: {
      type: String,
      required: false
    },
    active: {
      type: Boolean,
      default: true,
      required: true
    },
    newsletter: {
      type: Boolean,
      default: true,
      required: true
    },
    comment: {
      type: String,
      required: false
    },
    address: {
      pro: {
        description: {
          type: String,
          required: false
        },
        zipCode: {
          type: Number,
          required: false
        },
        town: {
          type: String,
          required: false
        },
        country: {
          type: String,
          required: false
        }
      },
      perso: {
        description: {
          type: String,
          required: false
        },
        zipCode: {
          type: Number,
          required: false
        },
        town: {
          type: String,
          required: false
        },
        country: {
          type: String,
          required: false
        }
      }
    },
    products:[{
      id: String,
      status: {
        name: String,
        enum : ['NONE', 'DONE', 'INTEREST']
      },
      attendedSession: String
    }]

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
