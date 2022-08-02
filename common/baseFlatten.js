import isArray from './isArray';
import isArguments from './isArguments';
import arrayPush from './pushArray';

/**
 * 
 * @desc 基本的扁平数组
 * @param {Array} array 
 * @param {Number} depth 
 * @param {Array} result 
 * @returns {Array}
 */
function baseFlatten(array, depth = 1, result) {
  result = result ? result : [];
  if (!isArray(array)) {
    return new Error('必须是一个数组');
  }
  const len = array.length;
  let index = -1;
  while(++index < len) {
    const value = array[index];
    // 递归，遇到不是数组的或者层数到了就推到返回数组，是的且层数没到就继续遍历
    if (depth > 0 && (isArguments(value) || isArray(value))) {
      // if (depth > 1) {
      //   baseFlatten(value, depth - 1, result);
      // } else {
      //   arrayPush(result, value);
      // }
      // 递归，层数减一
      baseFlatten(value, depth - 1, result);
    } else {
      result[result.length] = value;
    }
  }
  return result;
}

export default baseFlatten;