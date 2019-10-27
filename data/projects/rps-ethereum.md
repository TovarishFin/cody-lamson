---
weight: 1600
title: Rock Paper Scissors Ethereum
slug: rps-ethereum
liveLink: https://tovarishfin.github.io/rps-ethereum/
infoLink: rps-ethereum
image: /images/projects/rps-ethereum.png
warning: MetaMask required! Only deployed on ropsten testnet.
details: Probably the most overengineered rock paper scissors game in the world...

features:
  - name: Commit Reveal Pattern
    description: commit reveal pattern using hashes and signed data
  - name: well tested!
    description: all contracts are extensively tested using truffle.
  - name: contract size / gas limit circumvention through proxy storage
    description: with the way proxies work, you can have the proxy storage be applied later as the logic runs... this lets you get away with some neat things!
  - name: working blockchain based referral program
    description: users can refer others to the game and get a cut of the winnings via referall links. There is a referral area in the dapp where users can build referral links with a variety of options. Users can also get basic referral reporting and of course withdraw referral rewards.
  - name: graceful MetaMask requests
    description: users are not prompted to setup/enable MetaMask until actually needed.
  - name: token bank
    description: Bank smart contract acts as the escrow which holds on to users tokens when playing rock paper scissors. Deposits can be kept here until done playing.
  - name: token faucet
    description: receive 5 TST (TestToken) to play with and demo with the click of a button
  - name: multiple games at once
    description: special ui where a user can unlimited amount of games at one time.
  - name: make bets using any valid ERC20 token
    description: why? because... thats why.
  - name: use weth (WrappedEther) for ether based games
    description: special interface built in dapp ui for depositing and using ether via wrapped ether.

languages:
  - name: Javascript
    description: Used for dapp
  - name: OpenZeppelin
    description: contracts were dervied using OpenZepelin contracts. Upgradeable Proxy contracts are own implementation (was built before this was a very standard thing).
  - name: Vue
    description: Used for dapp
  - name: Vuex
    description: standard state management library for vue
  - name: Web3
    description: used for connecting to the ethereum blockchain.
  - name: Vuetify
    description: Uses Vuetify to implement a reasonably good looking ui quickly
---

## Why build this?
I started this project off with trying to wrap my head around state channels. I played with it a bit but couldn't find any patterns/implementations that would work at scale at the time (there are some neat and promising things now at the time of this writing). I then started to get into the idea of using tokens for absolutely anything and took off with that idea. 

There definitely was not any sort of real point to this project. I just sort of went with the flow and saw where it would go.

## Always Have a Personal Project...
I always have something going on on the side. I suppose I did still get some good learning out of this project. I got to use the Vue ecosystem and start thinking about useability. Many of the comopnents/concepts in this dapp were carried over and improved in my [cryptoWeddings](https://codylamson.com/projects/crypto-weddings-dapp) project.

## Commit Reveal Pattern
Another neat thing that I got to get my hands dirty with, is the "commit, reveal pattern". In other words in the context of rock paper scissors: "how can I prove I chose rock without showing my oppenent I chose rock until he has already chosen as well?" The answer to this is the "commit, reveal concept" which is implemented in this project.
