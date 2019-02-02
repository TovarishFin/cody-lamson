<template>
  <Layout>
    <v-btn
      class="mb-4"
      block
      color="primary"
      target="_blank"
      href="/files/CodyLamsonCV.pdf"
    >
      download my cv
    </v-btn>
    <logo-grid />
    <languages />
    <frameworks />
    <project-list :projects="$page.projects.edges" />
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
          details
        }
      }
    }
  }
</page-query>

<script>
import ProjectList from '~/components/ProjectList'
import Languages from '~/components/Languages'
import Frameworks from '~/components/Frameworks'
import LogoGrid from '~/components/LogoGrid'

export default {
  components: {
    ProjectList,
    Languages,
    Frameworks,
    LogoGrid
  }
}
</script>
