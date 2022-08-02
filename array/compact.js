import isArray from "../common/isArray";

/**
 * @desc 将数组中的假值元素删除
 * @param {*} arr 
 * @returns {Array}
 */
function compact(array) {
  if (!isArray(array)) {
    throw new Error('first param must be Aray!')
  }
  const len = array.length;
  if (len === 0) {
    return [];
  }

  let index = -1;
  let resIndex = 0;
  let result = []; // 初始化返回数组
  
  // 循环 
  while(++index < len) {
    // null, '', false, NaN, 0, undefined都会是假
    if (array[index]) {
      result[resIndex++] = array[index];
    }
  }

  return result;
}

export default compact;