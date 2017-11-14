
const updatePatients = require('../../hooks/update-patients');

// const convertDateToDutchDate = require('../../hooks/convert-date-to-dutch-date');

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
