---
title: BitcoinHex Smart Contracts
slug: bitcoin-hex-smart-contracts
liveLink: https://github.com/BitcoinHEX/contract
infoLink: bitcoin-hex-smart-contracts
image: /images/projects/bitcoin-hex-smart-contracts.png
warning: 
details: Bitcoin forked onto Ethereum using merkle trees and elliptic curve recovery. Implements trustless compound interest.
features:
  - name: Trustless Compounding Interest
    description: This function is a hybrid of the classic algorithm and looping in order to avoid both gas limit issues and integer overflows.
  - name: Merkle Proof Usage
    description: Using root merkle hashes at a specific block number, the contract can verify that a specific Bitcoin UTXO exists. Allowing for a Bitcoin holder to claim tokens.
  - name: Elliptic Curve Recovery
    description: Due to Bitcoin and Ethereum using the same elliptic curve, public keys from both blockchains can be used in order to sign data. This means that a bitcoin public key can be verified on an Ethereum smart contract. This is the second component to enabling Bitcoin holders to claim tokens.
  - name: ERC20 Compliant
    description: Follows the ERC20 standard, allowing for widespread interaction.
  - name: Extensive Testing
    description: On top of regular integration tests, stress tests are needed in order to be sure that there are no integer overflows when calculating compounding interest. Additionally, there are looping functions which needed to be tested in order to have assurances that nothing would be stuck in a broken state due to gas limit issues when looping over arrays.
languages:
  - name: Solidity
    description: Used for Smart Contracts
  - name: Javascript
    description: Used for integration tests
  - name: Mocha & Chai
    descrition: Used for integration tests
  - name: Truffle
    description: Used as a testing framework
  - name: OpenZeppelin
    description: Used for merkle tree and ERC20 functionality
---

## Additional Info

bitcoinhex stuff here...