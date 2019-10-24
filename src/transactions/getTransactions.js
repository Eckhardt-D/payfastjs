const axios = require("axios");
const makeEntity = require("./entity");
const convertToJson = require("../utils/CSV2JSON");

module.exports = function getTransactions({
  merchantId,
  passphrase,
  period,
  to,
  from
}) {
  return new Promise((resolve, reject) => {
    const transactionOptions = makeEntity({
      merchantId,
      passphrase,
      period,
      to,
      from
    });

    axios(transactionOptions)
      .then(result => convertToJson(result.data))
      .then(resolve)
      .catch(resolve);
  });
};
