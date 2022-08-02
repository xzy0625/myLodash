import baseFlatten from '../common/baseFlatten';

/**
 * 
 * @desc 扁平数组/类数组对象
 * @param {Array} array 
 * @returns 
 */
function flattenDeep(array) {
  // 全部扁平
  return baseFlatten(array, Infinity);
}

export default flattenDeep;