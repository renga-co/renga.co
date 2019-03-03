require('dotenv').config();

const { BLOCKS, MARKS, INLINES } = require('@contentful/rich-text-types');
const LOCALE = 'en-US';

const canonicalUrl = 'https://renga.co';

module.exports = {
  siteMetadata: {
    title: 'Renga',
    description:
      'Renga, a brand therapy group from Toronto. Brand therapy is a method that listens, collaborates, and empowers your brand to reach the right people by establishing a strong core identity.',
    siteUrl: canonicalUrl,
    email: 'hello@renga.co',
    emailCareers: 'careers@renga.co',
    image: '/images/social.png',
  },
  plugins: [
    'gatsby-plugin-flow',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: { siteUrl: canonicalUrl },
    },
    'gatsby-transformer-yaml',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'mmc7quk7n7ah',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: '@contentful/gatsby-transformer-contentful-richtext',
      options: {
        renderOptions: {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => {
              const fields = node.data.target.fields;
              const description = fields.description
                ? fields.description[LOCALE]
                : null;
              const file = fields.file[LOCALE];

              switch (file.contentType) {
                case 'image/png':
                case 'image/gif':
                case 'image/jpg':
                case 'image/jpeg':
                case 'image/webp':
                  const captionText = description
                    ? `<figcaption>${description}</figcaption>`
                    : '';
                  return `<figure><img src="${
                    file.url
                  }" />${captionText}</figure>`;
                default:
                  return;
              }
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-MXJ4Q46',
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup: ({
          query: {
            site: { siteMetadata },
            ...rest
          },
        }) => {
          return {
            ...siteMetadata,
            ...rest,
            image_url: `${canonicalUrl}/favicon.png`,
          };
        },
        feeds: [
          {
            title: 'Renga Blog Feed',
            output: '/rss.xml',
            serialize: ({ query: { site, allContentfulBlogPost } }) =>
              allContentfulBlogPost.edges.map(({ node }) => {
                const url = `${site.siteMetadata.siteUrl}/blog/${node.slug}`;
                const markdown = node.content.childMarkdownRemark;

                return {
                  title: node.title,
                  description: markdown.excerpt,
                  date: node.date,
                  url,
                  guid: url,
                  custom_elements: [{ 'content:encoded': markdown.html }],
                };
              }),
            query: `
              {
                allContentfulBlogPost(
                  limit: 1000,
                  sort: { fields: [date], order: DESC }
                ) {
                  edges {
                    node {
                      title
                      slug
                      date
                      content {
                        childMarkdownRemark {
                          html
                          excerpt
                        }
                      }
                    }
                  }
                }
              }
            `,
          },
        ],
      },
    },
    'gatsby-plugin-netlify',
  ],
};
