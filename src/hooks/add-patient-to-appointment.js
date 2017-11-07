// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addPatientToAppointment (hook) {

    const date = hook.params.date;
    const patient = hook.result;

    hook.app.service('dates').patch(date._id, {
      $addToSet: {
        patient: patient._id
      }
    });
    return Promise.resolve(hook);
  };
};
