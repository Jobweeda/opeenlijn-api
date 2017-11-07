const assert = require('assert');
const addAppointmentToPatient = require('../../src/hooks/add-appointment-to-patient');

describe('\'add-appointment-to-patient\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = addAppointmentToPatient();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});
