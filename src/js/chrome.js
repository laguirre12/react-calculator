/**
 * Exports the global chrome object. Allows for the global chrome variable to
 * mocked when the app is run outside of the browser extension format.
 * @module chrome
 * @author laguirre <aguirreluis1234@gmail.com>
 */

const identityMock = Object.freeze({
  storage: {
    local: {
      get: (settings, callback) => callback(settings),
      set: (settings, callback) => callback(),
    }
  },

  runtime: {
    error: undefined,
  },
});

module.exports = global.chrome || identityMock;
