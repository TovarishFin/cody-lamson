---
weight: 1500
title: Exchange Rate Smart Contracts
slug: exchange-rate-smart-contracts
liveLink: https://github.com/TovarishFin/fiat-exchange-rate
infoLink: exchange-rate-smart-contracts
image: /images/projects/exchange-rate-smart-contracts.png
details: Periodic off-chain exchange rates fetched on-chain hourly through Oraclize.
features:
  - name: Oraclize Usage
    description: Uses Oraclize to get off-chain exchange rates through API queries to cryptocompare.
  - name: Self Executing Smart Contract Code
    description: Oraclize functions are handled recursively, allowing for the owner to set and forget. Calls to update rates will be made automatically at the configured intervals and will keep running as long as the contract's ether balance is enough.
  - name: Configurable
    description: Allows for polling intervals, query urls, gas payments, to be configured. This allows for more long lived smart contracts preventing the need for redeployments if, for example an API goes down and is not longer valid.
  - name: Event Log
    description: Events emitted for every new rate fetched. Allowing for a cost effective log of previous rates.
languages:
  - name: Javascript
    description: Used for integration tests
  - name: Truffle
    description: Used for tests and deployment
  - name: OpenZeppelin
    description: Used as a basis for secure smart contracts
---

## Getting Off-Chain Data on Chain
Oraclize offers some really neat functionality which opens up whole new possibilities. This set of smart contracts allows one to retrieve any number of exchange rates and it can be done automatically through Oraclize's recursive functionality.