<template>
  <Layout>
    <v-card>
      <v-card-title>
        <p class="display-2">Previous Projects</p>
      </v-card-title>

      <project-list :projects="$page.projects.edges" />
    </v-card>
  </Layout>
</template>

<page-query>
  query Projects {
    projects: allProject  {
      edges {
        node {
          title,
          slug,
          image,
          liveLink,
          infoLink,
          warning,
          details,
        }
      }
    }
  }
</page-query>

<script>
import ProjectList from '~/components/ProjectList'

export default {
  components: {
    ProjectList
  }
}
</script>
