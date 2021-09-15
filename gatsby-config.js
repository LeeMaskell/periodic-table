/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/periodic-table",
  /* Your site config here */
  siteMetadata: {
    title: 'Periodic Table',
    description: 'Intercative Periodic Table of the Elements',
    author: '@leemaskell',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    }
  ],
}
