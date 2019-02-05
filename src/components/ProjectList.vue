<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex
        v-for="(project, i) in formattedProjects"
        :key="i"
        xs12
        md6
        lg4
        d-flex
      >
        <project-preview class="mb-4" :project="project" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProjectPreview from '~/components/ProjectPreview'

export default {
  components: {
    ProjectPreview
  },
  props: {
    projects: {
      required: true,
      type: Array
    }
  },
  methods: {
    compare(a, b) {
      const aWeight = parseInt(a.weight ? a.weight : 0)
      const bWeight = parseInt(b.weight ? b.weight : 0)
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
    formattedProjects() {
      return [...this.projects].map(project => project.node).sort(this.compare)
    }
  }
}
</script>
