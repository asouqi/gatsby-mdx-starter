/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */


exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            internal {
              contentFilePath
            }
            frontmatter {
              title
              path
            }
            id
          }
        }
      }
    }
  `)

  return data.allMdx.edges.map((edge) => {
    const {
      title,
      path,
    } = edge.node.frontmatter
    const {
      id,
      internal: { contentFilePath },
    } = edge.node

    const mdxPageTemplate = require.resolve("./src/components/MDXPageTemplate.tsx")

    actions.createPage({
      path,
      component: `${mdxPageTemplate}?__contentFilePath=${contentFilePath}`,
      context: { id, title },
    })
  })
}
