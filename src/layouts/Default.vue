<template>
  <v-app dark>
    <app-drawer :drawerOpen="drawerOpen" @setDrawer="setDrawer" />
    <app-toolbar :drawerOpen="drawerOpen" :name="'FIX ME!'" @setDrawer="setDrawer" />
    
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <div><slot></slot></div>
        </v-slide-y-transition>
      </v-container>
    </v-content>

    <app-footer />
  </v-app>
</template>
<script>
import { VApp, VContent, VContainer, VSlideYTransition } from 'vuetify/lib'
import AppDrawer from '~/components/AppDrawer.vue'
import AppToolbar from '~/components/AppToolbar.vue'
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
      drawerOpen: true
    }
  },
  methods: {
    setDrawer(drawerOpen) {
      this.drawerOpen = drawerOpen
    }
  }
}
</script>
