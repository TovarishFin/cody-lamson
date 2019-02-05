const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
module.exports = {
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin()]
  },
  errorHandler: (err, vm, info) => {
    console.error(err, vm, info)
  }
}
