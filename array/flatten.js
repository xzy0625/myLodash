import baseFlatten from '../common/baseFlatten';

/**
 * 
 * @desc 扁平数组/类数组对象
 * @param {Array} array 
 * @returns 
 */
function flatten(array) {
  // 默认扁平一层
  return baseFlatten(array, 1);
}

export default flatten;