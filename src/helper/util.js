export default class Util {
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
}
