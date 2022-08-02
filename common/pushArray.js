/**
 * 
 * @desc 数组推送
 * @param {Array} result 
 * @param {Object} value 
 * @returns 
 */
function arrayPush(result, value) {
  const len = value.length;
  let index = -1;

  while(++index < len) {
    result[result.length] = value[index];
  }

  return result;
}

export default arrayPush;