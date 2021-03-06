---
weight: 1900
title: Brickblock Smart Contract Ecosystem
slug: brickblock-smart-contracts
liveLink: https://github.com/brickblock-io/smart-contracts
infoLink: brickblock-smart-contracts
image: /images/projects/brickblock-smart-contracts.png
details: Brickblock smart contract ecosystem
features:
  - name: Extensive Testing
    description: Over 300 tests and counting have been created for the smart contract ecosystem. Both unit and integration tests are performed using Truffle.
  - name: Consensys Audited
    description: Several of the smart contracts have been edited by multiple auditors, including Consensys. There have been no critical or medium issues found.
  - name: ERC20 Tokens
    description: There are currently 3 ERC20 tokens in the ecosystem. Each of these tokens have special extended functionality.
  - name: Upgradeable
    description: The entire ecosystem is bound together using a contract registry contract which can be updated with new addresses
  - name: Dynamic Balances, Unlimited Dividend Payouts
    description: By manipulation the balanceOf of an ERC20 token, payouts are able to be made to unlimited amounts of addresses showing an immediate, up to date balance and avoid high gas costs.
languages:
  - name: Javascript
    description: Used for integration tests
  - name: Truffle
    description: Used for tests
  - name: OpenZeppelin
    description: Used as a basis for secure, audited smart contracts
---

## 15 Contracts Deployed/Audited 0 Major Bugs Found
I am quite proud of my work on the smart contracts at Brickblock. I wrote 90% of the code for the entire ecosystem of smart contracts. The ecosystem is not small or simple either. Despite the large amount of functionality and complexity, audits by both SmartDec and Consensys found no major or medium bugs. What this means is that there were no bugs which actually threated intended functionality. There were only minor suggestions for optimizations. Links to audits can be found [here](https://github.com/brickblock-io/smart-contracts/tree/master/docs/audits).

## Cool Things that were Developed by Me at Brickblock
I think one of the neater things that I came up with there was a way of getting around gas limits for a single address smart contract. This can be accomplished by chaining `delegatecall` proxy contracts. I also came up with and desgined what is now called I believe unstructured storage. Where storage slots are determined based on `keccak256 bytes32` storage slots.

## Mainnet Deployed & Exchange Listed
The full set of contracts have been deployed on mainnet. The BBK token can be found on several exchanges and can be found on marketcap listing sites such as [coinmarketcap.com](https://coinmarketcap.com/currencies/brickblock/) and [livecoinwatch.com](https://www.livecoinwatch.com/price/Brickblock-_BBK). Contracts can also be found on etherscan.