const csv = require("csvtojson");

module.exports = function(inputCSV) {
  return new Promise((resolve, reject) => {
    csv({ output: "json" })
      .fromString(inputCSV)
      .then(resolve)
      .catch(() => resolve(inputCSV));
  });
};
