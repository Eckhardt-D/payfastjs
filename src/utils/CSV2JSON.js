const csv = require("csvjson");

module.exports = function(inputCSV) {
  return new Promise((resolve, reject) => {
    try {
      return resolve(csv.toObject(inputCSV));
    } catch (e) {
      console.log("Failed to convert to JSON, falling back to CSV.");
      return reject({ data: inputCSV, error: e });
    }
  });
};
