import isArray from "../common/isArray";

/**
 * @desc 将一个数组拆分为多个数组
 * @param {*} arr 
 * @returns {Boolean}
 */
function chunk(array, size) {
  if (!isArray(array)) {
    throw new Error('first param must be Aray!')
  }
  size = size ? size : 1;
  const len = array.length;
  if (size === 0 || len === 0) {
    return [];
  }

  let index = 0;
  let resIndex = 0;
  let result = Array(Math.ceil(len / size)); // 初始化返回数组
  
  // 循环
  while(index < len) {
    result[resIndex++] = array.slice(index, (index += size));
  }

  return result;
}

export default chunk;