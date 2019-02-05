<template>
  <Layout>
    <intro />
  </Layout>
</template>

<script>
import Intro from '~/components/Intro'

export default {
  components: {
    Intro
  },
  metaInfo: {
    title: 'About Cody Lamson',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'A brief introduction to Cody Lamson'
      }
    ]
  }
}
</script>
