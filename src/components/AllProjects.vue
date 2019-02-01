<template>
  <v-container class="pa-0 mb-4" grid-list-xl>
    <v-layout row wrap>
      <v-flex v-for="(project, i) in projects" :key="i" xs12 md6 lg4 d-flex>
        <project-preview
          class="mb-4"
          :title="project.title"
          :details="project.details"
          :warning="project.warning"
          :info-link="project.infoLink"
          :live-link="project.liveLink"
          :image="project.image"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import projects from '~/data/projects'
import ProjectPreview from '~/components/ProjectPreview'

export default {
  components: {
    ProjectPreview
  },
  data() {
    return {
      projects
    }
  }
}
</script>
