/**
 * @desc 判断一个值是不是类数组对象，是个对象，同时也是数组
 * @param {*} arr 
 * @returns {Boolean}
 */
function isArguments(value) {
  // 不是null,是个对象，
  return value !== null && typeof value === Object && nativeTostring(value) === '[object Arguments]'
}

export default isArguments;