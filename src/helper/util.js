/**
 * @module src/helper/util.js
 * @author Matthew Birch <matthew678532@gmail.com>
 */


/**
 * @class
 * @classdesc a global utility class used to supplement developmental processes
 */
export default class Util {
  /**
   * @static isPureObject - used to check whether a passed object is pure. By
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
  static isPureObject(obj) {
    return !this.isArray(obj)
           && !this.isString(obj)
           && !this.isNumber(obj)
           && !this.isBoolean(obj)
           && !this.isFunction(obj)
  }

  /**
   * @static isObject - a method to check whether an object passed is a
   * generic object. This check is weaker than isPureObject and will
   * return true for all object instatiations i.e: new String(), new
   * Function(), etc.
   * @param  {Object} obj an object literal, or call to a constructor.
   * @return {Boolean} a boolean indicating whether the passed obj is of type
   * Object.
   */
  static isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
  }

  static isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]'
  }

  static isString(str) {
    return Object.prototype.toString.call(str) === '[object String]'
  }

  static isNumber(num) {
    return Object.prototype.toString.call(num) === '[object Number]'
  }

  static isBoolean(bool) {
    return Object.prototype.toString.call(bool) === '[object Boolean]'
  }

  static isFunction(func) {
    return Object.prototype.toString.call(func) === '[object Function]'
  }
}
