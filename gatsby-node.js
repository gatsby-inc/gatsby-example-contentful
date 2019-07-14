const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve('./src/templates/blog-post.js')
  const { data } = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  )

  const posts = data.allContentfulBlogPost.edges
  posts.forEach((post, index) => {
    createPage({
      path: `/blog/${post.node.slug}/`,
      component: blogPost,
      context: {
        slug: post.node.slug,
      },
    })
  })
}
