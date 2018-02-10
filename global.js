const path = require('path')
const chai = require('chai')

/**
 * global - a customised require method used to load in user-defined files
 * with ease.
 * @param  {String} name a string identifier to a file from the root dir
 * (i.e. src/helper/util - note: we can, and should omit the '/' for
 * readibility as this is appended automatically).
 * @return {Object} the exported contents of a file.
 */
global.localRequire = function(name) {
  return require(path.resolve(__dirname, name))
}

// reset nodes native assertion library to use chai
global.expect = chai.expect
global.assert = chai.assert
