const { getErrorName, getErrorMessage } = require('./lib/error');

const StandardError = Error;
class DamnError extends Error {
  constructor(message, ...args) {
    super(message, ...args);

    this.name = getErrorName();
    this.message = getErrorMessage();
  }
}

const undoGlobalConfig = () => {
  global.Error = StandardError;
};

const configGlobally = () => {
  global.Error = DamnError;
};

module.exports = { DamnError, undoGlobalConfig, configGlobally };
