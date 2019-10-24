// 2017-01-01T12:00:00
// YYYY-MM-DDTHH:MM:SS.000z
// 2019-10-24T11:52:35

module.exports = function(inputISO) {
  return inputISO.replace(/\..*/, "");
};
