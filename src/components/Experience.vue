<template>
  <div>
    <languages :langData="langData" />
    <br />
    <frameworks :frameworkData="frameworkData" />
  </div>
</template>

<script>
import languages from '~/components/Languages'
import frameworks from '~/components/Frameworks'

export default {
  components: {
    languages,
    frameworks
  },
  props: {
    langData: {
      required: true,
      type: Array
    },
    frameworkData: {
      required: true,
      type: Array
    }
  }
}
</script>

<style></style>
