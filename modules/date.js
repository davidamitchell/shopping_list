
require('date-utils');

var exports = module.exports = {};

exports.currentDateString = function() {
  today = Date.today();
  formated = today.toFormat('DD/MM/YYYY')
  console.log(formated)
  return formated
};
