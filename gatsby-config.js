module.exports = {
  siteMetadata: {
    title: 'Renga',
    titleTemplate: '%s – Renga',
    description: 'Brand therapy group based in Toronto, Canada.',
    siteUrl: 'https://renga.co',
  },
  plugins: [
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
    'gatsby-plugin-feed',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify',
  ],
};
