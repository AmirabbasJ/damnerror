const { DamnError, configGlobally, undoGlobalConfig } = require('../src');

/**
 * ===========================
 * With Try/Catch
 * ===========================
 */

try {
  throw new DamnError();
} catch (err) {
  console.error(err);
}

try {
  throw new DamnError('The password is wrong');
} catch (err) {
  console.error(err);
}

/**
 * ===========================
 * With Promises
 * ===========================
 */

const rejectThis = () =>
  new Promise((resolve, reject) => {
    reject(new DamnError());
  });

const rejectWithMessage = () =>
  new Promise((resolve, reject) => {
    reject(new DamnError('The password is wrong'));
  });

rejectThis()
  .then(() => console.log('How?!'))
  .catch(err => console.error(err));

rejectWithMessage()
  .then(() => console.log('How?!'))
  .catch(err => console.error(err));

/**
 * ===========================
 * With globally configured
 * ===========================
 */

configGlobally();

try {
  throw new Error('with damn Error configured globally');
} catch (err) {
  console.error(err);
}

undoGlobalConfig();

try {
  throw new Error('without damn Error configured globally');
} catch (err) {
  console.error(err);
}
