require('dotenv').config({
  path: '.env',
});
const {
  name,
  siteTitle,
  siteDescription,
  themeColor,
  backgroundColor,
  siteUrl,
  siteLogo,
  googleAnalyticsID,
} = require('./site-config');

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    siteUrl,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: googleAnalyticsID,
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteTitle,
        short_name: name,
        start_url: '/',
        background_color: backgroundColor,
        theme_color: themeColor,
        display: 'minimal-ui',
        icon: siteLogo,
        icons: [
          {
            src: '/images/favicon48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '/images/favicon144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/images/favicon192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/favicon250.png',
            sizes: '250x250',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', disallow: '' }],
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'nxdigital.wordpress.com',
        protocol: 'https',
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret: process.env.WORDPRESS_SECRET,
          wpcom_app_clientId: process.env.WORDPRESS_CLIENTID,
          wpcom_user: process.env.WORDPRESS_U,
          wpcom_pass: process.env.WORDPRESS_P,
        },
        verboseOutput: false,
        searchAndReplaceContentUrls: {
          sourceUrl: 'https://nxdigital.wordpress.com',
          replacementUrl: 'https://nxdigital.com.au',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        whitelist: ['body', 'html', 'fa', 'fa-twitter', 'fa-github', 'fa-linkedin'],
        whitelistPatterns: ['/^owl-/'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/static/images/services/`,
      },
    },
    {
      resolve: 'gatsby-transformer-json',
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
