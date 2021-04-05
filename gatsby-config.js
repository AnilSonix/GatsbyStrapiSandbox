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
        apiURL: `https://c50e4f3b5e86.ngrok.io/messages`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`messages`],
      },
    },
  ],
}
