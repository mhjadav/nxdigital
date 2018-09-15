const {
  name,
  siteTitle,
  siteDescription,
  siteKeyword,
  themeColor,
  backgroundColor,
  siteUrl,
  siteLogo,
  googleAnalyticsID
} = require('./site-config');
module.exports = {
    siteMetadata: {
      title: siteTitle,
      description: siteDescription,
      siteUrl: siteUrl,
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: googleAnalyticsID,
          head: true
        }
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: siteTitle,
          short_name: name,
          start_url: "/",
          background_color: backgroundColor,
          theme_color: themeColor,
          display: "minimal-ui",
          icon: siteLogo,
          icons: [
            {
              src: `/images/favicon48.png`,
              sizes: `48x48`,
              type: `image/png`
            },
            {
              src: `/images/favicon192.png`,
              sizes: `192x192`,
              type: `image/png`
            },
            {
              src: `/images/favicon512.png`,
              sizes: `512x512`,
              type: `image/png`
            },
          ]
        },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        whitelist: ["body","html","fa", "fa-twitter", "fa-github", "fa-linkedin"],
        whitelistPatterns: ['/^owl-/'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: siteUrl + '/sitemap.xml',
        policy: [{ userAgent: '*', disallow: '' }]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    ],
  };
  