<template>
  <v-card class="mb-4" elevation="4">
    <v-toolbar flat color="secondary">
      <v-toolbar-title>Frameworks & Experience</v-toolbar-title>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="formattedFrameworkData"
      class="elevation-1"
      expand
      item-key="framework"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <tr class="clickable" @click="props.expanded = !props.expanded">
          <td>{{ props.item.framework }}</td>
          <td>{{ props.item.experience }}</td>
        </tr>
      </template>
      <template slot="expand" slot-scope="props">
        <v-card flat>
          <v-card-text><span v-html="props.item.content" /></v-card-text>
        </v-card>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    frameworkData: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      headers: [
        {
          text: 'Framework',
          value: 'framework',
          sortable: true
        },
        {
          text: 'Years of Experience',
          value: 'time',
          sortable: true
        }
      ]
    }
  },
  computed: {
    formattedFrameworkData() {
      return this.frameworkData.map(framework => framework.node)
    }
  }
}
</script>

<style>
.clickable:hover {
  cursor: pointer;
}
</style>
