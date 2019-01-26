<template>
  <Layout>
    <!-- <vue-particles class="particles" color="#9c27b0" background-color="transparent" />
    <span class="display-3 splash-intro">
      <p>I am...</p>
      <vue-typer class="typer-1" :text="typingText" eraseStyle="backspace" :eraseDelay="50" :typeDelay="50" />
    </span>
    <logo-grid class="splash-background" /> -->
    <experience />
    <projects />
  </Layout>
</template>

<script>
import { VueTyper } from 'vue-typer'
import LogoGrid from '~/components/LogoGrid'
import Experience from '~/components/Experience'
import Projects from '~/components/AllProjects'

export default {
  components: {
    VueTyper,
    LogoGrid,
    Experience,
    Projects
  },
  data() {
    return {
      typingText: [
        'a blockchain developer',
        'a full stack developer',
        'a frontend developer',
        'a backend developer',
        'Cody Lamson'
      ]
    }
  }
}
</script>

<style>
.splash-background {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.25;
}
.particles {
  position: relative;
  height: 100vh;
  width: 100vw;
}
.splash-intro {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  width: 70%;
}
.vue-typer .custom.char {
  color: #2196f3;
}

.vue-typer .custom.caret {
  width: 5px;
  background-color: #ffffff;
}
</style>
