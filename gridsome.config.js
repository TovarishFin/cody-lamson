// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart to work properly.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Cody Lamson',
  siteUrl: 'https://codylamson.com',
  siteDescription: 'Portfolio site and blog',
  transformers: {
    remark: {}
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        route: '/blog/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'projects/**/*.md',
        typeName: 'Project',
        route: '/projects/:slug'
      }
    }
  ]
}
