---
weight: 1300
title: NoobCoin everyone gets 100. Yes even you.
slug: noob-coin-smart-contract
liveLink: https://github.com/TovarishFin/NoobCoin
infoLink: noob-coin-smart-contract
image: /images/projects/noob-coin-smart-contract.png
details: An ERC20 token that anyone can use without risk.
features:
  - name: Everyone gets 100 NCN (NoobCoin)
    desicription: By overriding the balanceOf function, you give everyone a starting balance of 100 NCN.
  - name: ERC20 Compliance
    description: All interfaces required for ERC20 compliance is still met.
  - name: Deployed to many testnets
    description: Deployed to many testnets, allowing flexible usage.
  - name: Plug and Play
    description: Just add the address for the appropriate network listed in the GitHub readme and you are good to go. You can begin making transfers immediately.
languages:
  - name: Javascript
    description: Used for integration tests
  - name: Truffle
    description: Used for tests and deployment
  - name: OpenZeppelin
    description: Used as a basis for secure smart contracts
---

## Thinking Outside the Box
I got this idea when seeing a joke token with a symbol of PNS that was registered in the Parity Token Registry. The token was written so that the `totalSupply` always returned 100 tokens. With that in mind I thought it would be a neat idea to use that concept for good instead. The idea is simple... a token where you have 100 tokens to start but can also use them as a regular token. This is really nice for quick tests on testnets where you need a token but don't care **which** token it is. It is also nice for people who are just getting started with ERC20 tokens and dont want to risk real tokens.