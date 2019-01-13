import Vuetify from 'vuetify'
import 'vuetify/src/stylus/app.styl'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue) {
  Vue.use(Vuetify, {
    theme: {
      primary: '#ee44aa',
      secondary: '#424242',
      accent: '#82B1FF',
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107'
    },
    customProperties: true,
    iconfont: 'md'
  })
  Vue.component('Layout', DefaultLayout)
}
