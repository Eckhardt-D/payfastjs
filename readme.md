<p style="text-align: center;">
  <img style="max-width: 100%;" src="./assets/NodeFast.png">
</p>

A Node.js implementation of [PayFast's](https://www.payfast.co.za) API. An effort to present the data returned in a JS friendly way and abstract some of PayFast's intricate request payloads.

## Getting started

```bash
npm i @eckidevs/payfastjs
```
or

```bash
yarn add @ckidevs/payfastjs
```

## Usage

```js
const payfast = require('payfastjs');

// Use the credentials from your PayFast dashboard
payfast.options({ merchantId: 'xxxx', passphrase: 'xxxx' })

// Example usage
payfast.getTransactions({ period: 'daily', from: '2018-12-31' })
  .then(data => console.log(data)) // JSON
  .catch(error => console.log(error))
```

## Available methods

### options({ merchantId: String, passphrase: String })

##### - merchantId:
  - type: String
  - required: true
  - description: your PayFast merchantId

##### - passphrase:
  - type: String
  - required: true
  - description: your PayFast passphrase must explicity be created under settings > integrations.

### getTransactions({ period: String, from: String, to: String })

##### - period:
  - type: String
  - required: false
  - default: daily
  - options: '', 'daily', 'weekly', 'monthly'
  - description: Gives the agregate of transactions for the specified period.

##### - from:
  - type: String
  - required: false
  - default: start of current month
  - format: 'YYYY-MM-DD'
  - description: Specifies the date from which transactions should be searched for.

##### - to:
  - type: String
  - required: false
  - default: current day
  - format: 'YYYY-MM-DD'
  - description: Specifies the date up to which transactions should be searched for.


## Roadmap

  - Write unit tests
  - setup CI/CD
  - Contribution guide and repo config
  - Further SDK methods
    - Subscription management
    - Ad Hoc payment management
    - Credit Card transaction query
  - Maintainence/staying up to date with PayFast releases

### Contributions and comments welcome