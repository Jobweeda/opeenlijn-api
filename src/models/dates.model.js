// dates-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const dates = new Schema({


    date: { type: Date, required: true },
    month: { type: String },
    time: { type: String },

    patientIds: { type: Schema.Types.ObjectId, ref: 'patients'},

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('dates', dates);
};
