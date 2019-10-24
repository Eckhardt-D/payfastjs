const crypto = require("crypto");

module.exports = function(uri) {
  return crypto
    .createHash("md5")
    .update(uri)
    .digest("hex");
};
