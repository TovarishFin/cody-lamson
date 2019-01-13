<template>
  <Layout>
    <p>sup buddy</p>
    <project-preview
      class="mb-4"
      v-for="project in $page.allProject.edges" 
      :key="project.node.id"
      :title="project.node.title"
      :content="project.node.content"
      :date="project.node.date"
      :slug="project.node.slug"
    />
    <!-- <p v-for="project in $page.allProject.edges" :key="project.node.id">{{project.node.title}}</p> -->
  </Layout>
</template>

<page-query>
query Project {
	allProject {
		edges {
      node {
        title,
        slug,
        date,
        content
      }
    }
  }
}
</page-query>

<script>
import ProjectPreview from '~/components/ProjectPreview'

export default {
  components: {
    ProjectPreview
  }
}
</script>
