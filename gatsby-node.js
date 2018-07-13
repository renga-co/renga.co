const { resolve } = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const slugify = require('slug');

exports.onCreateNode = ({ boundActionCreators, getNode, node }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const requestedSlug = node.frontmatter.slug;
    const generatedSlug = createFilePath({
      node,
      getNode,
      basePath: 'content',
    });

    const date = new Date(node.frontmatter.date);
    const slug = node.frontmatter.slug
      ? node.frontmatter.slug
      : slugify(node.frontmatter.title).toLowerCase();

    createNodeField({ node, name: 'date', value: date });
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage, createRedirect } = boundActionCreators;

  const template = resolve('src/templates/post.js');
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allMarkdownRemark.edges.forEach(edge => {
    const path = edge.node.fields.slug;
    createPage({
      path,
      component: template,
      context: {
        slug: path,
      },
    });
  });

  return result;
};
