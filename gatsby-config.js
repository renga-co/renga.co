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
  mapping: {
    'MarkdownRemark.frontmatter.author': 'PeopleYaml',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'data',
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
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { fields: [fields___date], order: DESC }
                  filter: {
                    fields: { type: { eq: "blog" } }
                    frontmatter: { published: { ne: false } }
                  }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
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
