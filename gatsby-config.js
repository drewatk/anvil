module.exports = {
  siteMetadata: {
    title: "The Anvil",
    description: "Purdue's Student Entrepreneurship Hub"
  },
  pathPrefix: "/anvil",
  plugins: [
    "gatsby-plugin-react-helmet",
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
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src"]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-svg",
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: "1cPsbJRvz4cNbhzD4UJBubc2XoaxvbUWvJGwA5QBsd7k",
        worksheetTitle: "Sheet1",
        credentials: require("./anvilstartupscom-47b7bc851a45.json")
      }
    },
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: "10nA5fQCMJsZXNIRgavQEgcKYejtV_rccBqQj11DdEiw",
        worksheetTitle: "Sheet1",
        credentials: require("./anvilstartupscom-47b7bc851a45.json")
      }
    }
  ]
};
