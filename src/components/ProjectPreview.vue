<template>
  <v-card style="position: relative;" elevation="4">
    <v-toolbar color="secondary"
      ><h2>{{ project.title }}</h2></v-toolbar
    >

    <g-image fit class="image" :src="image" />

    <v-card-text>
      <p>{{ project.details }}</p>
    </v-card-text>

    <v-card-text style="margin-bottom: 50px;">
      <p class="font-weight-bold error--text">{{ project.warning }}</p>
    </v-card-text>

    <v-card-actions style="position: absolute; bottom: 5px; left: 5px;">
      <v-btn
        :disabled="!project.liveLink"
        color="primary"
        target="_blank"
        :href="project.liveLink"
      >
        {{ !project.liveLink ? 'Project Moved' : 'View Live' }}
      </v-btn>
      <v-btn color="secondary" :to="`/projects/${project.infoLink}`">
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
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    image() {
      console.log(this.project)
      return this.project.image ? this.project.image.src : ''
    }
  }
}
</script>
<style>
.image {
  width: 100%;
}
</style>
