<template>
  <Layout>
    <div v-html="$page.project.content" />
  </Layout>
</template>

<page-query>
query Project ($path: String!) {
  project: project (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.project.title
    }
  }
}
</script>
