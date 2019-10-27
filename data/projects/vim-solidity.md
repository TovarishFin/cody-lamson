---
weight: 1600
title: vim-solidity
slug: vim-solidity
liveLink: https://github.com/TovarishFin/vim-solidity
infoLink: vim-solidity
image: /images/projects/vim-solidity.png
details: Better solidity syntax highlighting for vim

features:
  - name: assembly syntax highlighting
    description: assembly blocks now have a special color compard to normal code.
  - name: natspec syntax
    description: easier and nicer documentation reading with special colors.
  - name: more extensive color scheme
    description: many language feature were missing in other versions. This version fixes that.
  - name: scientific number notation
    description: 1e18 used much anyone?
  - name: constructor keyword highlighting
    description: this was missing before
  - name: calldata highlighting
    description: this was missing before
  - name: typecase highlighting
    description: this was missing before
  - name: abi keyword added
    description: because the old repo has not been touched in 3 years, this feature did not exist at the time.
  - name: anonymous & indexed event modifiers includes
    description: this was missing before
  - name: reserved words give errors
    description: this was missing before
  - name: overall more extensive and detailed syntax highlighting
    description: old repo abandonded
  - name: various bug fixes
    description: old repo abandonded

languages:
  - name: Solidity
    description: smart contract language for ethereum. Syntax highlighting is for this language.
  - name: VimScript
    description: Used for implementing the actual syntax
---

## Why build this?
As I was getting into vim, I realized that solidity was lacking a good syntax highlighter in the vim ecosystem. The most popular repo for this purpose had not been touched in 3 years. So I decided to build my own :). The original is forked from [tomlion's repo](https://github.com/tomlion/vim-solidity), but it has little in common with it at this point.

## Things Learned
The big thing that I got a lot of practice with here was regular expressions! This was used frequently here as you would imagine.
