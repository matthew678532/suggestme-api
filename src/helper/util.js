export default class Util {
  static isPureObject(obj) {
    return !this.isArray(obj)
           && !this.isString(obj)
           && !this.isNumber(obj)
           && !this.isBoolean(obj)
           && !this.isFunction(obj)
  }

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
