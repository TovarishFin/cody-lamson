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
    <languages :langData="$page.langData.edges" />
    <frameworks :frameworkData="$page.frameworkData.edges" />
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
          details,
          weight
        }
      }
    }
    langData: allLanguage  {
      edges {
        node {
          language,
          experience,
          weight,
          content
        }
      }
    }
    frameworkData: allFramework  {
      edges {
        node {
          framework,
          experience,
          weight,
          content
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
  metaInfo: {
    title: "Cody Lamson's Curriculum Vitae",
    meta: [
      {
        key: 'description',
        name: 'description',
        content: "Download or view Cody Lamson's Curriculum Vitae here"
      }
    ]
  },
  components: {
    ProjectList,
    Languages,
    Frameworks,
    LogoGrid
  }
}
</script>
