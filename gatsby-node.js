const { resolve } = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const slugify = require('slug');

const toSlug = str => slugify(str).toLowerCase();

const getSlug = (node, filePath) => {
  if (node.frontmatter.slug) {
    return toSlug(node.frontmatter.slug);
  }
  if (node.frontmatter.title) {
    return toSlug(node.frontmatter.title);
  }
  return toSlug(filePath);
};

exports.onCreateNode = ({ actions, getNode, node }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const filePath = createFilePath({
      node,
      getNode,
      basePath: 'content',
    });

    let type = 'unknown';
    let slug = '/' + getSlug(node, filePath);

    if (filePath.includes('blog')) {
      const date = new Date(node.frontmatter.date);
      createNodeField({ node, name: 'date', value: date });
      type = 'blog';
      slug = '/blog' + slug;
    }

    createNodeField({ node, name: 'slug', value: slug });
    createNodeField({ node, name: 'type', value: type });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

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
