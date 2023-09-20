import { CreateWebpackConfigArgs } from "gatsby";

const path = require(`path`);

// Create blog pages dynamically
/* exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const result = await graphql(`
    query {
      allSamplePages {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `);
  result.data.allSamplePages.edges.forEach((edge) => {
    createPage({
      path: `${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        title: edge.node.title,
      },
    });
  });
}; */
// Let plugins extend/mutate the site’s webpack configuration.
exports.onCreateWebpackConfig = ({
  getConfig,
  actions,
}: CreateWebpackConfigArgs) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        pages: path.resolve(__dirname, "src/pages"),
        utils: path.resolve(__dirname, "src/utils"),
        hooks: path.resolve(__dirname, "src/hooks"),
      },
    },
  });
};
