<template>
  <v-navigation-drawer
    persistent
    v-model="drawerStatus"
    enable-resize-watcher
    fixed
    app
  >
    <v-list>
      <v-list-tile v-for="(item, i) in items" :to="item.to" :key="`item-${i}`">
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { VList, VNavigationDrawer } from 'vuetify/lib'
import eventBus from '~/events/eventBus'

export default {
  components: {
    VList,
    VNavigationDrawer
  },
  props: {
    drawerOpen: Boolean
  },
  data() {
    return {
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-information-outline',
          title: 'About',
          to: '/about'
        },
        {
          icon: 'mdi-phone',
          title: 'Contact',
          to: '/contact'
        },
        {
          icon: 'mdi-briefcase',
          title: 'Services',
          to: '/services'
        },
        {
          icon: 'mdi-account-box',
          title: 'Curriculum Vitae',
          to: '/curriculum-vitae'
        },
        {
          icon: 'mdi-apps',
          title: 'Projects',
          to: '/all-projects'
        }
      ]
    }
  },
  computed: {
    drawerStatus: {
      get() {
        return this.drawerOpen
      },
      set(drawerOpen) {
        eventBus.$emit('setDrawer', drawerOpen)
      }
    }
  }
}
</script>
