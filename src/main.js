import Vuetify from 'vuetify'
// import VueParticles from 'vue-particles'
// import VClipboard from 'v-clipboard'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/src/stylus/app.styl'
import 'vuetify/dist/vuetify.min.css'
// import '@mdi/font/css/materialdesignicons.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue) {
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
  // Vue.use(VClipboard)
}
