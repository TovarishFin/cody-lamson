<template>
  <Layout>
    <v-card>
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
          weight
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
