module.exports = {
  siteMetadata: {
    title: 'Renga',
    description:
      'Renga, a brand therapy group from Toronto. Brand therapy is a method that listens, collaborates, and empowers your brand to reach the right people by establishing a strong core identity.',
    siteUrl: 'https://renga.co',
    image: '/images/social.png',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'data',
      },
    },
    {
      resolve: `gatsby-plugin-drift`,
      options: {
        appId: '6t8pw9tsh6zt',
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify',
  ],
};
