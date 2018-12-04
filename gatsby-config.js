module.exports = {
  siteMetadata: {
    title: "The Anvil",
    description:
      "The Anvil is Purdue's Student Entrepreneurship Hub and coworking space. Create your next startup, build a new product, and network with Purdue University's student startup community."
  },
  pathPrefix: "/anvil",
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "The Anvil",
        short_name: "The Anvil",
        start_url: "/",
        background_color: "#ffcd2e",
        theme_color: "#ffcd2e",
        display: "minimal-ui",
        icon: "src/assets/anvil_logo.png" // This path is relative to the root of the site.
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
