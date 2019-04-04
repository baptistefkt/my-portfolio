const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulProject {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(results => {
      results.data.allContentfulProject.edges.forEach(({ node }) => {
        createPage({
          path: `work/${node.slug}`,
          component: path.resolve('./src/components/projectLayout.js'),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
}
