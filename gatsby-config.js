module.exports = {
  siteMetadata: {
    title: "The Anvil",
    description: "Purdue's Student Entrepreneurship Hub"
  },
  pathPrefix: "/anvil",
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline",
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
    "gatsby-plugin-react-svg",
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "UA-130293321-1",
        head: true
      }
    }
  ]
};
