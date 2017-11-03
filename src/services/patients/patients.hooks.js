
const updatePatients = require('../../hooks/update-patients');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [updatePatients()],
    patch: [updatePatients()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
