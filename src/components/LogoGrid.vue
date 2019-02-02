<template>
  <v-card class="mb-4 pa-4" elevation="4">
    <v-container grid-list-sm align-center justify-center>
      <v-layout row wrap align-center justify-center>
        <v-flex
          v-for="(logo, i) in logos"
          :key="i"
          xs3
          md2
          xl1
          style="text-align: center;"
        >
          <v-avatar>
            <g-image :src="`/images/logos/${logo}`" :alt="logo" class="image" />
          </v-avatar>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
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
        'yarn.png',
        'vue.png',
        'cpp.png',
        'eos.png',
        'oraclize.png'
      ]
    }
  }
}
</script>

<style></style>
