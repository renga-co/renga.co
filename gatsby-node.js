const { resolve } = require('path');
const slugify = require('slug');

const templates = {
  blogPost: resolve('./src/templates/post.js'),
  default: resolve('./src/templates/page.js'),
  about: resolve('./src/templates/about.js'),
  brandWorkshop: resolve('./src/templates/brand-workshop.js'),
};

const toCamelCase = str =>
  str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  const query = await graphql(`
    {
      pages: allContentfulPage(limit: 1000) {
        edges {
          node {
            id
            slug
            templateName
          }
        }
      }

      blogPosts: allContentfulBlogPost(limit: 1000) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (query.errors) {
    throw query.errors;
  }

  query.data.blogPosts.edges.forEach(({ node }) => {
    const path = `blog/${node.slug}`;

    createPage({
      path,
      component: templates.blogPost,
      context: {
        slug: node.slug,
      },
    });
  });

  query.data.pages.edges.forEach(({ node }) => {
    const path = node.slug;
    const templateName = toCamelCase(node.templateName);
    const template = templates[templateName];

    if (!template) {
      throw new Error(`No template at ${node.templateName}.`);
    }

    createPage({
      path,
      component: template,
      context: {
        slug: node.slug,
      },
    });
  });
};
