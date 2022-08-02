const nativeTostring = Function.prototype.call.bind(Object.prototype.toString);

/**
 * @desc 判断是不是数组
 * @param {*} arr 
 * @returns {Boolean}
 */
function isArray(arr) {
  return nativeTostring(arr) === '[object Array]';
}

export default isArray;