module.exports = {
  siteMetadata: {
    title: "The Anvil",
    description: "Description"
  },
  pathPrefix: "/anvil",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: "assets"
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src"]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-svg"
  ]
};
