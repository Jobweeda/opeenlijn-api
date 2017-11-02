const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');
const feathersClient = feathers();

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth());


const patient1 = {
  firstName: 'andy',
  lastName: 'de graag',
  email: 'jobweeda@hotmail.com',
  phoneNumber: '0612345678',
};

feathersClient.service('patients').create(patient1)
  .then((result) => {
    console.log('Patient seeded...', result);
  });
