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
    } else {
      type = 'custom-page';
    }

    createNodeField({ node, name: 'slug', value: slug });
    createNodeField({ node, name: 'type', value: type });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  const postTemplate = resolve('./src/templates/post.js');
  const pageTemplate = resolve('./src/templates/page.js');

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
              type
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const nodes = result.data.allMarkdownRemark.edges.map(m => m.node);
  const postNodes = nodes.filter(node => node.fields.type === 'blog');
  const pageNodes = nodes.filter(node => node.fields.type === 'custom-page');

  postNodes.forEach(node => {
    const path = node.fields.slug;

    createPage({
      path,
      component: postTemplate,
      context: {
        slug: path,
      },
    });
  });

  pageNodes.forEach(node => {
    const path = node.fields.slug;

    createPage({
      path,
      component: pageTemplate,
      context: {
        slug: path,
      },
    });
  });

  return result;
};
