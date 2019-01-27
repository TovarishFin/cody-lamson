<template>
  <v-app dark>
    <app-drawer :drawerOpen="drawerOpen" @setDrawer="setDrawer" />

    <app-toolbar :drawerOpen="drawerOpen" :name="'FIX ME!'" @setDrawer="setDrawer" />
    
    <v-content>
      <v-container>
        <v-slide-y-transition mode="out-in">
          <div><slot></slot></div>
        </v-slide-y-transition>
      </v-container>
    </v-content>

    <v-snackbar @setNotifier="setNotifier" v-model="notifierOpen">
      {{ notifierText }}
      <v-btn flat @click="notifierOpen = false">Close</v-btn>
    </v-snackbar>

    <app-footer />
  </v-app>
</template>
<script>
import { VApp, VContent, VContainer, VSlideYTransition } from 'vuetify/lib'
import eventBus from '~/events/eventBus'
import AppDrawer from '~/components/AppDrawer'
import AppToolbar from '~/components/AppToolbar'
import AppFooter from '~/components/AppFooter'

export default {
  components: {
    VApp,
    VContent,
    VContainer,
    VSlideYTransition,
    AppDrawer,
    AppToolbar,
    AppFooter
  },
  data() {
    return {
      drawerOpen: false,
      notifierOpen: false,
      notifierText: ''
    }
  },
  created() {
    eventBus.$on('setDrawer', this.setDrawer)
    eventBus.$on('setNotifier', this.setNotifier)
  },
  methods: {
    setDrawer(drawerOpen) {
      this.drawerOpen = drawerOpen
    },
    setNotifier(open, text) {
      this.notifierOpen = open
      this.notifierText = text
    }
  }
}
</script>
