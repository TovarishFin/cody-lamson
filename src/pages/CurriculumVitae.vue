<template>
  <Layout>
    <v-btn class="mb-4" block color="primary" target="_blank" href="/files/CodyLamsonCV.pdf">
      download my cv
    </v-btn>
    <logo-grid />
    <languages />
    <frameworks />
    <all-projects />
  </Layout>
</template>

<script>
import AllProjects from '~/components/AllProjects'
import Languages from '~/components/Languages'
import Frameworks from '~/components/Frameworks'
import LogoGrid from '~/components/LogoGrid'

export default {
  components: {
    AllProjects,
    Languages,
    Frameworks,
    LogoGrid
  }
}
</script>
