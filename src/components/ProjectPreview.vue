<template>
  <v-card style="position: relative;">
    <v-card-title primary-title>
      <h2>{{ title }}</h2>
    </v-card-title>

    <g-image fit class="image" :src="`/images/projects/${image}`" />

    <v-card-text>
      <p>{{ details }}</p>
    </v-card-text>

    <v-card-text style="margin-bottom: 50px;">
      <p class="font-weight-bold error--text">{{ warning }}</p>
    </v-card-text>

    <v-card-actions style="position: absolute; bottom: 5px; left: 5px;">
      <v-btn color="primary" target="_blank" :href="liveLink">
        view live
      </v-btn>
      <v-btn color="secondary" :to="`/projects/${infoLink}`">
        see more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { VCard, VBtn } from 'vuetify/lib'

export default {
  components: {
    VCard,
    VBtn
  },
  props: {
    title: String,
    details: String,
    warning: String,
    liveLink: String,
    infoLink: String,
    image: String
  }
}
</script>
<style>
.image {
  width: 100%;
}
</style>
