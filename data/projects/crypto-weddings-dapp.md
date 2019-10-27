---
weight: 1700
title: CryptoWeddings DApp
slug: crypto-weddings-dapp
liveLink: https://www.cryptoweddings.io/
infoLink: crypto-weddings-dapp
image: /images/projects/crypto-weddings-dapp.png
warning: ether required to interact. Works on a variety of testnets and mainnet. MetaMask not required.
details: Get married on the blockchain.

features:
  - name: Marry on Blockchain
    description: leverages immutable smart contracts to declare marriage status that cannot be changed/censored by anyone but the two participants through mutual agreement.
  - name: Watch Wedding Live
    description: Smart contract events are picked up in real time so that viewers around the world can see the wedding happen in real time.
  - name: Send Wedding Gifts with Messages
    description: Messages for couples can be sent via contract events. (Can be muted/filtered client side by the wedding owners (couple/fiances)).
  - name: Set Wedding Photo
    description: Save wedding photo location on smart contract.
  - name: Divorce (if needed)
    description: Destroy wedding contract through mutual agreement.
  - name: Integrated Wallet using Ethers
    description: No need for MetaMask. Users can use either integrated wallet built using ethers, or MetaMask.
  - name: Live Contract Events
    description: All important data is updated in realtime through contract event listeners.
  - name: QR Code Scanning for ease of address use
    description: Handling ether transfers for gas or adding fiances to a wedding is easy when using qr codes. No need to type in long addresses!
  - name: Voice API (chrome only) to say "I do" or "I don't"
    description: Really capture that moment by actually saying the words rather than just pressing a button.

languages:
  - name: Javascript
    description: Used for dapp
  - name: Vue
    description: Used for dapp
  - name: Vuex
    description: standard state management library for vue
  - name: Ethers
    description: A more stable and bug free way of connecting to the ethereum blockchain.
  - name: Vuetify
    description: Uses Vuetify to implement a reasonably good looking ui quickly
  - name: Aws
    description: hosted and deployed via aws s3 bucket.
---

## My First Personal Project Decentralized Application

While talking with my wife one night, we came up with this idea. She took care of the designs and I took care of the smart contracts, and DApp.

## Great Practice

The original version was built while I was working at Brickblock. A lot of the patterns that I decided to use, I eventually implemented in the Brickblock platform.

## The Rewrite... and Taking it to Mainnet!

The first version was built in 2017 but never got deployed to mainnet. Once when my wife and I decided to have a wedding ceremony, I decided to rewrite the whole thing from scratch. I had learnt a lot more about smart contract and dapp best practices in the two years since the dapp was originally built!

The dapp was rebuilt, launched on mainnet, and used by myself and my wife on July 10th 2019. The wedding was streamed on twitch and gained a bit of media attention. We had an [interview](https://blocktv.com/watch/2019-07-18/5d307a2c6f719) on blocktv.com.

Most of the development process, from contract rewrites to client development, was streamed live on twitch.

## Useability as a focus

While creating this dapp, I really tried to focus on useability. I ended up building my own wallet implementation in the browser instead of forcing users to install MetaMask, though it is still an option to use it if desired.

The wallet's private keys are kept secure by being encrypted via password in local storage on the browser. Private Keys are retrieved through mnemonics, which the user is prompted to write and down and back up.

I also tried to create as uninvasive of a user flow as possible. This means only prompting the user for an account when one is really needed.

## Evolution of patterns

Many of the components and user flow is an evolution of my work on my earlier pet project: rps-ethereum. You can find many less well thought out implementation of these concepts in that [project](https://codylamson.com/projects/rps-ethereum).

