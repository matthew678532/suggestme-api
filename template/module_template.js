// Node package require
const module = require('package');
// Local user-defined package/module require
const module = require('path/to/module');

exports.{ methodName } = function(...params) {
  return new Promise((resolve, reject) => {
    // Function Body...
  })
}

exports.{ className } = class {
  constructor(opts) {
    super(opts);
  }
}
