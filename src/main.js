import Vuetify from 'vuetify'
// import VueParticles from 'vue-particles'
import VClipboard from 'v-clipboard'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/src/stylus/app.styl'
import 'vuetify/dist/vuetify.min.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Material+Icons'
  })

  head.link.push({
    rel: 'stylesheet',
    href:
      'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.4.93/css/materialdesignicons.css'
  })

  Vue.use(Vuetify, {
    theme: {
      primary: colors.purple,
      secondary: colors.blue,
      accent: colors.shades.black,
      error: colors.red,
      info: colors.teal,
      success: colors.green,
      warning: colors.yellow
    },
    customProperties: true,
    iconfont: 'md'
  })
  Vue.component('Layout', DefaultLayout)
  // Vue.use(VueParticles)
  Vue.use(VClipboard)
}
