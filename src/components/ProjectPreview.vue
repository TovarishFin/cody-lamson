<template>
  <v-card>
    <v-card-media :src="`/images/projects/${slug}.png`"></v-card-media>

    <v-card-title primary-title>
      <h2>{{title}}</h2>
    </v-card-title>

    <v-card-text>
      <p>{{ content }}</p>
    </v-card-text>

    <v-card-actions>
      <v-btn :to="`/projects/${slug}`">
        see more
      </v-btn>
      <v-btn>
        view live
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
    content: String,
    slug: String,
    date: String
  }
}
</script>
