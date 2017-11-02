// patients-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const patients = new Schema({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String },
    phoneNumber: { type: String },
    appointmentIds: { type: [Date] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('patients', patients);
};
