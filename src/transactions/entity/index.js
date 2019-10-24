const makeEntity = require("./builder");

module.exports = function transactionEntity({
  merchantId,
  passphrase,
  period,
  to,
  from
}) {
  return makeEntity(merchantId, passphrase, period, { to, from });
};
