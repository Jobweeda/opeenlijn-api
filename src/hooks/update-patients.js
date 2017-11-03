// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const PATIENT_UPDATE ='PATIENT_UPDATE';

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function updatePatients (hook) {

    const { type, payload } = hook.data;

    switch(type) {

    case PATIENT_UPDATE : {

      hook.data = payload;
      return hook;
    }
    }
    return Promise.resolve(hook);
  };
};
