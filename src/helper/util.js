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
export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

/**
 * isArray - a method to check whether an object passed is of type
 * array. True is returned if the object passed is initialised via its
 * constructor (i.e. new Array()), or using the bracket notation (i.e. []).
 * @param  {Array} arr an array, bracket notation or via its constructor.
 * @return {Boolean} a boolean indicating whether the passed arr is of type
 * Array.
 */
export function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
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
export function isString(str) {
  return Object.prototype.toString.call(str) === '[object String]'
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
export function isNumber(num) {
  return Object.prototype.toString.call(num) === '[object Number]'
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
export function isBoolean(bool) {
  return Object.prototype.toString.call(bool) === '[object Boolean]'
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
export function isFunction(func) {
  return Object.prototype.toString.call(func) === '[object Function]'
}

/**
 * isPureObject - used to check whether a passed object is pure. By
 * pure we mean a custom object instantiated either by curly brace
 * syntax ({}) or via its constructor (new CustomObject()). The following
 * Objects instantiations are excluded: new String(), new Number(), new
 * Boolean(), and new Function() as these are not what we consider pure. There
 * exists some edge cases which work around our defintion of pure such as:
 * new Date(), and new Math() which if passed returns true, which are to be
 * accounted for at a later date.
 * @param  {Object} obj an object literal, or call to a constructor.
 * @return {Boolean} a boolean indicating whether the passed obj is pure or
 * not.
 */
export function isPureObject(obj) {
  return !isArray(obj)
         && !isString(obj)
         && !isNumber(obj)
         && !isBoolean(obj)
         && !isFunction(obj)
}
