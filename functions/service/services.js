// get-timestamp.js

/**
 * Returns the server timestamp on request.
 *
 * @param {Object} req Express Request Object
 * @param {Object} res Express Request Object
 * @returns {string} A date object.
 */
exports.getTimestamp = function() {
    return Date().toString();
  };
  
//   module.exports = getTimestamp;

  exports.handler = function(min, max, decimalPlaces) {
    var rand = Math.random()*(max-min) + min;
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand*power) / power;
 }

