(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{48:function(t,a,o){"use strict";var e=o(0),n={};e.default.util.defineReactive(n,"data",{}),a.a={set:function(t,a){return e.default.set(n.data,t,a)},delete:function(t){return e.default.delete(n.data,t)},get:function(t){return n.data[t]},has:function(t){return!!n.data[t]}}},57:function(t,a,o){"use strict";o.r(a);o(3);var e=o(48),n=o(10),s=o(8);a.default=function(t,a){return new Promise(function(a){var r=new RegExp("^".concat(n.a.pathPrefix)),c=Object(s.b)(t.path.replace(r,"/")),d=c?"/".concat(c,".json"):"/index.json";o(70)("./data".concat(d)).then(function(o){e.a.set(t.path,o.default.data),a(o)})})}},70:function(t,a,o){var e={"./data/all-projects.json":[71,32],"./data/blog/test-post.json":[72,10],"./data/curriculum-vitae.json":[73,33],"./data/index.json":[74,34],"./data/projects/bitcoin-hex-smart-contracts.json":[75,26],"./data/projects/brickblock-platform.json":[76,27],"./data/projects/brickblock-smart-contracts.json":[77,28],"./data/projects/crypto-weddings-dapp.json":[78,29],"./data/projects/crypto-weddings-smart-contracts.json":[79,30],"./data/projects/exchange-rate-smart-contracts.json":[80,31],"./data/projects/mosaic-care.json":[81,11],"./data/projects/mosaic-sales.json":[82,12],"./data/projects/noob-coin-smart-contract.json":[83,13],"./data/projects/paper-speech-input.json":[84,14],"./data/projects/photo-editor-component.json":[85,15],"./data/projects/picsum-token.json":[86,16],"./data/projects/postmaster-api-integration.json":[87,17],"./data/projects/react-store-demo.json":[88,18],"./data/projects/redux-store-demo.json":[89,19],"./data/projects/retail-backend.json":[90,20],"./data/projects/retail-site-integration.json":[91,21],"./data/projects/space-shooter-game.json":[92,22],"./data/projects/stripe-api-integration.json":[93,23],"./data/projects/tv-two-smart-contracts.json":[94,24],"./data/projects/voteable-owner.json":[95,25]};function n(t){var a=e[t];return a?o.e(a[1]).then(function(){var t=a[0];return o.t(t,3)}):Promise.resolve().then(function(){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a})}n.keys=function(){return Object.keys(e)},n.id=70,t.exports=n}}]);