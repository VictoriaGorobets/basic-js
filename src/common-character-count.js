const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const set1 = new Set(s1);
  const set2 = new Set(s2);
  let commonCount = 0;
  for (const char of set1) {
    if (set2.has(char)) {
      commonCount += Math.min(s1.split(char).length - 1, s2.split(char).length - 1);
    }
  }

  // Return the total count of common characters
  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};

