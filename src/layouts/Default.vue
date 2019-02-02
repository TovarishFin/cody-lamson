<template>
  <v-app dark>
    <app-drawer :drawerOpen="drawerOpen" @setDrawer="setDrawer" />

    <app-toolbar
      :drawerOpen="drawerOpen"
      :name="getPageName($route.name)"
      @setDrawer="setDrawer"
    />

    <v-content>
      <v-container>
        <slot />
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
import { VApp, VContent, VContainer } from 'vuetify/lib'
import eventBus from '~/events/eventBus'
import AppDrawer from '~/components/AppDrawer'
import AppToolbar from '~/components/AppToolbar'
import AppFooter from '~/components/AppFooter'

export default {
  components: {
    VApp,
    VContent,
    VContainer,
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
    },
    getPageName(routeName) {
      const result = routeName.replace(/([A-Z])/g, ' $1')
      return result.charAt(0).toUpperCase() + result.slice(1)
    }
  }
}
</script>
