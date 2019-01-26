<template>
  <v-container fluid grid-list-sm>
  <v-layout row wrap>
    <v-flex v-for="(logo, i) in logos" :key="i" xs2 align-center justify-center>
      <img :src="`/images/logos/${logo}`" :alt="logo" height="100vh">
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { VContainer, VLayout, VFlex } from 'vuetify/lib'

export default {
  components: {
    VContainer,
    VLayout,
    VFlex
  },
  data() {
    return {
      logos: [
        'angular.png',
        'bitcoin.png',
        'bootstrap.png',
        'chai.png',
        'combo.png',
        'css.png',
        'drizzle.png',
        'ethereum.png',
        'firebase.png',
        'ganache.png',
        'golang.png',
        'gulp.png',
        'html.png',
        'javascript.png',
        'mac.png',
        'materialui.png',
        'metamask.svg',
        'mocha.svg',
        'mongo.png',
        'node.png',
        'npm.png',
        'polymer.png',
        'python.png',
        'raiden.svg',
        'react.png',
        'redux.png',
        'solidity.svg',
        'truffle.png',
        'ubuntu.png',
        'webpack.svg',
        'yarn.png'
      ]
    }
  }
}
</script>

<style>
</style>
