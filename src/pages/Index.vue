<template>
  <Layout>
    <div class="splash-container">
      <vue-particles
        class="particles"
        color="#9c27b0"
        background-color="transparent"
      />
      <span class="display-3 splash-intro">
        <p>I am...</p>
        <vue-typer
          class="typer-1"
          :text="typingText"
          eraseStyle="backspace"
          :eraseDelay="50"
          :typeDelay="50"
        />
      </span>
    </div>
    <div class="splash-spacer" />
    <intro />
    <logo-grid />
    <experience />
    <projects />
  </Layout>
</template>

<script>
import { VueTyper } from 'vue-typer'
import Intro from '~/components/Intro'
import LogoGrid from '~/components/LogoGrid'
import Experience from '~/components/Experience'
import Projects from '~/components/AllProjects'

export default {
  components: {
    VueTyper,
    Intro,
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
.splash-container {
  background-color: #000000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 64px);
}
.splash-spacer {
  height: 100vh;
}
.splash-background {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.25;
}
.particles {
  position: relative;
  width: 100%;
  height: 100%;
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
