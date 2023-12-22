const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return Math.max(...n.toString().split('').map((char, index, array) => parseInt([...array.slice(0, index), ...array.slice(index + 1)].join(''))));
}

module.exports = {
  deleteDigit
};
