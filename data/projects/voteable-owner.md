---
weight: 1050
title: Voteable Owner
slug: voteable-owner
liveLink: https://github.com/TovarishFin/votable-owner
infoLink: voteable-owner
image: /images/projects/voteable-owner.png
warning: 
details: A MultiSig Contract Using a New, More Clear Pattern
features:
  - name: Clear Voting Mechanics
    description: Other MultiSig wallets take the destination and bytes calldata as arguments, this does not require this.
  - name: Clear Limitations of Functionality
    description: With clear limitations on what the contract can do, more security can be achieved
  - name: Easily Extended
    description: Additional voteable actions can be added in a very easy way
  - name: Well Documented
    description: Uses natspec for clear documentation on smart contract functionality
languages:
  - name: Solidity
    description: Contracts are written in solidity
  - name: Javascript
    description: Tests are written in Javascript using truffle
---

## A Byproduct of my Work with Scutix
Most of my work with Scutix is in a private repository sadly. However I was allowed to share this part of my work. It works by creating a unique hash with `msg.data` and nonce. 
Different voters can then run the function in order to vote on running that same function. This has the benefit of making the contract a bit more transparent than a traditional multi-sig contract.
It also limits the functionality which can be seen as both a good thing and a bad thing.