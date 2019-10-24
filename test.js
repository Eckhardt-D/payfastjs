require("dotenv").config();
const payfast = require("./src");

payfast.options({
  merchantId: process.env.MERCHANT_ID,
  passphrase: process.env.PASSPHRASE
});

(async function() {
  const transactions = await payfast.getTransactions({ from: "2017-01-01" });
  console.log(transactions);
})();
