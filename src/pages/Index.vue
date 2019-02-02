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
      <span class="splash-more">
        <animated-arrow class="more" />
      </span>
    </div>
    <div class="splash-spacer" />
    <intro />
    <logo-grid />
    <experience />
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
import { VueTyper } from 'vue-typer'
import Intro from '~/components/Intro'
import LogoGrid from '~/components/LogoGrid'
import Experience from '~/components/Experience'
import ProjectList from '~/components/ProjectList'
import AnimatedArrow from '~/components/AnimatedArrow'

export default {
  components: {
    VueTyper,
    Intro,
    LogoGrid,
    Experience,
    ProjectList,
    AnimatedArrow
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
.splash-more {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
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
.more {
  display: block;
  margin: auto;
}
.vue-typer .custom.char {
  color: #2196f3;
}
.vue-typer .custom.caret {
  width: 5px;
  background-color: #ffffff;
}
</style>
