// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addAppointmentToPatient (hook) {

    const date = hook.params.date;

   hook.data = { ...hook.data, dateId: date._id}; //eslint-disable-line

    return hook;
  };
};
