import baseFlatten from '../common/baseFlatten';

/**
 * 
 * @desc 扁平数组/类数组对象
 * @param {Array} array 
 * @returns 
 */
function flattenDepth(array, depth) {
  // 扁平指定层数
  return baseFlatten(array, depth);
}

export default flattenDepth;