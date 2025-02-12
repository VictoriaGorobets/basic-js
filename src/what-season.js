const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!';
    }
    try {
        date.toDateString();
    } catch (e) {
        throw new Error('Invalid date!');
    }
    const monthToSeasonMap = new Map([
        [11, 'winter'],
        [0, 'winter'],
        [1, 'winter'],
        [2, 'spring'],
        [3, 'spring'],
        [4, 'spring'],
        [5, 'summer'],
        [6, 'summer'],
        [7, 'summer'],
        [8, 'autumn'],
        [9, 'autumn'],
        [10, 'autumn'],
    ]);
    const monthNumber = date.getMonth();
    return monthToSeasonMap.get(monthNumber);
}

module.exports = {
    getSeason
};
