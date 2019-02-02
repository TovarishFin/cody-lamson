<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex v-for="project in projects" :key="project.id" xs12 md6 lg4 d-flex>
        <project-preview
          class="mb-4"
          :title="project.node.title"
          :details="project.node.details"
          :warning="project.node.warning"
          :info-link="project.node.infoLink"
          :live-link="project.node.liveLink"
          :image="project.node.image ? project.node.image.src : ''"
        />
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
  }
}
</script>
