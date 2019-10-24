const { getTransactions } = require("../transactions");

module.exports = function buildInstance() {
  let _merchantId, _passphrase;
  return {
    options: function({ merchantId, passphrase }) {
      _merchantId = merchantId;
      _passphrase = passphrase;
    },
    getTransactions: ({ period, to, from }) =>
      getTransactions({
        merchantId: _merchantId,
        passphrase: _passphrase,
        period,
        to,
        from
      })
  };
};
