<template>
  <v-card class="mb-4" elevation="4">
    <v-toolbar flat color="secondary">
      <v-toolbar-title>Languages & Experience</v-toolbar-title>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="languages"
      class="elevation-1"
      expand
      item-key="lang"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <tr class="clickable" @click="props.expanded = !props.expanded">
          <td>{{ props.item.lang }}</td>
          <td>{{ props.item.time }}</td>
        </tr>
      </template>
      <template slot="expand" slot-scope="props">
        <v-card flat>
          <v-card-text>{{ props.item.details }}</v-card-text>
        </v-card>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
// eslint-disable-next-line
import languages, { headers } from '~/data/languages'

export default {
  data() {
    return {
      languages,
      headers
    }
  }
}
</script>

<style>
.clickable:hover {
  cursor: pointer;
}
</style>
