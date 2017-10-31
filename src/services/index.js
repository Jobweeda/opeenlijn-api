const patients = require('./patients/patients.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(patients);
};
