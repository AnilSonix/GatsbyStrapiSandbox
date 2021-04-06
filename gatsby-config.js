/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "@chakra-ui/gatsby-plugin",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://8fce69477bf6.ngrok.io`,
        contentTypes: [`messages`],
      },
    },
  ],
}
