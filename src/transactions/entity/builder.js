const dateFormatter = require("../../utils/dateFormatter");
const buildUriString = require("../../utils/buildUriStringFromObject");
const createSignature = require("../../utils/createSignatureFromUri");
const urlFormat = require("url");

module.exports = function buildTransactionRequest(
  merchantID,
  passphrase,
  period = "",
  params = {}
) {
  checkParameters(params);
  checkPeriod(period);

  let headerItems = makeBaseHeaders({ merchantID, passphrase, params });
  const UriEncodedString = buildUriString(headerItems);
  headerItems.signature = createSignature(UriEncodedString);

  delete headerItems.passphrase;

  return {
    url: parseURL(period, params),
    method: "GET",
    headers: {
      ...headerItems
    }
  };
};

function checkPeriod(period) {
  const accepted = ["", "daily", "weekly", "monthly"];

  if (accepted.indexOf(period) == -1) {
    throw `Period must be 'daily', 'weekly', 'monthly' or nothing.`;
  }
}

function checkParameters(requestParams) {
  const acceptableParameters = ["from", "to"];

  Object.keys(requestParams).forEach(key => {
    if (key && acceptableParameters.indexOf(key) === -1) {
      throw 'The transaction request can only accept "to" and "from" parameters';
    }
  });

  return;
}

function makeBaseHeaders({ params, merchantID, passphrase }) {
  return JSON.parse(
    JSON.stringify({
      from: params.from || undefined,
      "merchant-id": merchantID,
      passphrase,
      timestamp: dateFormatter(new Date().toISOString()),
      to: params.to || undefined,
      version: "v1"
    })
  );
}

function parseURL(period, { to, from }) {
  return urlFormat.format({
    protocol: "https",
    hostname: "api.payfast.co.za",
    pathname: `transactions/history${period ? "/" + period : ""}`,
    query: {
      ...(to ? { to } : {}),
      ...(from ? { from } : {})
    }
  });
}
