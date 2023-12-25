const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        // Exclude the next element
        i++;
        break;
      case '--discard-prev':
        // Exclude the previous element
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          result.pop();
        }
        break;
      case '--double-next':
        // Duplicate the next element
        if (i < arr.length - 1) {
          result.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        // Duplicate the previous element
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          result.push(arr[i - 1]);
        }
        break;
      default:
        // Regular element, add to the result
        result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform
};
