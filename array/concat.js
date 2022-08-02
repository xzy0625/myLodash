import isArray from "../common/isArray";

/**
 * @desc 将数组和其他的值连接起来
 * @param {*} arr 
 * @returns {Boolean}
 */
function concat(array) {
  if (!isArray(array)) {
    throw new Error('first param must be Aray!')
  }
  const arr = Array.prototype.slice.call(arguments).slice(1);

  const len = arr.len;
  if (len === 0) {
    return arr;
  }

  let index = -1;
  // 不改变传进来的数组
  const result = [...array];
  
  // 循环
  while(++index < len) {
    if (isArray(arr[index])) {
      result = [...result, ...arr[index]];
    } else {
      result.push(arr[index]);
    }
  }
  
  return result;
}

export default concat;