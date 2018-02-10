/**
 * @module src/helper/util.js
 * @author Matthew Birch <matthew678532@gmail.com>
 */

/**
 * isObject - a method to check whether an object passed is a
 * generic object. This check is weaker than isPureObject and will
 * return true for all object instatiations i.e: new String(), new
 * Function(), etc.
 * @param  {Object} obj an object literal, or call to a constructor.
 * @return {Boolean} a boolean indicating whether the passed obj is of type
 * Object.
 */
function isObject(obj) {
  return obj && obj.constructor ? obj.constructor === Object : false
}

/**
 * isArray - a method to check whether an object passed is of type
 * array. True is returned if the object passed is initialised via its
 * constructor (i.e. new Array()), or using the bracket notation (i.e. []).
 * @param  {Array} arr an array, bracket notation or via its constructor.
 * @return {Boolean} a boolean indicating whether the passed arr is of type
 * Array.
 */
function isArray(arr) {
  return arr && arr.constructor ? arr.constructor === Array : false
}

/**
 * isString - a method to check whether an object passed is of type
 * string. True is returned if the object passed is initialised via its
 * constructor (i.e. new String()), or using the primitive alternative
 * (i.e. "some string").
 * @param  {String} str a string, primitive or via its constructor.
 * @return {Boolean} a boolean indicating whether the passed str is of type
 * String.
 */
function isString(str) {
  return str && str.constructor ? str.constructor === String : false
}

/**
 * isNumber - a method to check whether an object passed is of type
 * number. True is returned if the object passed is initialised via its
 * constructor (i.e. new Number()), or using the primitive alternative
 * (i.e. 10).
 * @param  {Number} num a number, primitive or via its constructor.
 * @return {Boolean} a boolean indicating whether the passed num is of type
 * Number.
 */
function isNumber(num) {
  return num && num.constructor ? num.constructor === Number : false
}

/**
 * isBoolean - a method to check whether an object passed is of type
 * boolean. True is returned if the object passed is initialised via its
 * constructor (i.e. new Boolean()), or using the primitive alternative
 * (i.e. true).
 * @param  {Boolean} bool a boolean, primitive or via its constructor.
 * @return {Boolean} a boolean indicating whether the passed bool is of type
 * Boolean.
 */
function isBoolean(bool) {
  return bool && bool.constructor ? bool.constructor === Boolean : false
}

/**
 * isFunction - a method to check whether an object passed is of type
 * function. True is returned if the object passed is initialised via its
 * constructor (i.e. new Function()), or using a function declaration
 * (i.e. function a() { ... }), or using a function expression
 * (i.e. var a = function() { ... }).
 * @param  {Function} func a function, constructor, declaration or expression.
 * @return {Boolean} a boolean indicating whether the passed func is of type
 * Function.
 */
function isFunction(func) {
  return func && func.constructor ? func.constructor === Function : false
}

/**
 * colors - an object containing console text color references.
 */
const colors = {
  white: '\x1b[37m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m'
}

/**
 * print - a method used to support the printing of messages to the
 * console via a specified color.
 * @param  {Object|String|Number|Boolean|Function|Array} msg a message to print
 * to the console.
 * @param  {String} color a string identifier representing a color
 * @return {Undefined}
 */
function print(msg, color) {
  if (!isString(color)) {
    console.log(Error('Invalid param(s)'))
    return
  }
  const reset = '\x1b[0m'
  switch(color) {
    case colors.blue:
      console.info(color, msg, reset)
      break
    case colors.yellow:
      console.warn(color, msg, reset)
      break
    case colors.red:
      console.error(color, msg, reset)
      break
    default:
      console.log(color, msg, reset)
      break
  }
}

module.exports = {
  isObject,
  isArray,
  isString,
  isNumber,
  isBoolean,
  isFunction,
  colors,
  print
}
