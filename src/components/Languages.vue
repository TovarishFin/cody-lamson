<template>
  <v-card class="mb-4" elevation="4">
    <v-toolbar flat color="secondary">
      <v-toolbar-title>Languages & Experience</v-toolbar-title>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="formattedLangData"
      class="elevation-1"
      expand
      item-key="language"
      hide-actions
      disable-initial-sort
    >
      <template slot="items" slot-scope="props">
        <tr class="clickable" @click="props.expanded = !props.expanded">
          <td>{{ props.item.language }}</td>
          <td>{{ props.item.experience }}</td>
        </tr>
      </template>
      <template slot="expand" slot-scope="props">
        <v-card flat>
          <v-card-text><span v-html="props.item.content"/></v-card-text>
        </v-card>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    langData: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      headers: [
        {
          text: 'Language',
          value: 'language',
          sortable: true
        },
        {
          text: 'Years of Experience',
          value: 'experience'
        }
      ]
    }
  },
  methods: {
    compare(a, b) {
      const aWeight = parseInt(a.weight)
      const bWeight = parseInt(b.weight)
      if (aWeight < bWeight) {
        return 1
      }

      if (aWeight > bWeight) {
        return -1
      }

      return 0
    }
  },
  computed: {
    formattedLangData() {
      return [...this.langData.map(lang => lang.node)].sort(this.compare)
    }
  }
}
</script>

<style>
.clickable:hover {
  cursor: pointer;
}
</style>
