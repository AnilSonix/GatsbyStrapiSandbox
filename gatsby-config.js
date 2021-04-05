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
        apiURL: `https://f39bead3fb0b.ngrok.io`,
        contentTypes: [`messages`],
      },
    },
  ],
}
