<template>
  <v-toolbar color="primary" app>
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title v-text="name"></v-toolbar-title>
    <v-spacer />
  </v-toolbar>
</template>

<script>
export default {
  props: {
    name: String,
    drawerOpen: Boolean
  },
  methods: {
    toggleDrawer() {
      this.$emit('setDrawer', !this.drawerOpen)
    }
  }
}
</script>
