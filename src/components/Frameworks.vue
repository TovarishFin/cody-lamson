<template>
  <v-card class="mb-4" elevation="4">
    <v-toolbar flat color="secondary">
      <v-toolbar-title>Frameworks & Experience</v-toolbar-title>
    </v-toolbar>
    <v-data-table
    :headers="headers"
    :items="frameworks"
    class="elevation-1"
    expand
    item-key="framework"
    hide-actions
  >
    <template slot="items" slot-scope="props">
      <tr class="clickable" @click="props.expanded = !props.expanded">
        <td>{{ props.item.framework }}</td>
        <td>{{ props.item.time }}</td>
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
        <v-card flat>
          <v-card-text>{{props.item.details}}</v-card-text>
        </v-card>
    </template>
  </v-data-table>
  </v-card>
</template>

<script>
// eslint-disable-next-line
import frameworks, { headers } from '~/data/frameworks'

export default {
  data() {
    return {
      frameworks,
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
