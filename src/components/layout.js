import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql, withPrefix } from "gatsby";

import Navbar from "./navbar";
import Footer from "./footer";

import "../stylesheets/index.scss";
import "typeface-open-sans";
import "typeface-poppins";

import styles from "./layout.module.scss";

const Layout = ({ children, location, pageTitle }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={
            pageTitle
              ? `${data.site.siteMetadata.title} - ${pageTitle}`
              : data.site.siteMetadata.title
          }
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description
            },
            {
              name: "og:description",
              content: data.site.siteMetadata.description
            },
            {
              name: "og:site_name",
              content: data.site.title
            },
            {
              name: "keywords",
              content:
                "Purdue University, Startups, Entrepreneurship, Technology, Co-working, coworking"
            },
            {
              name: `og:url`,
              content: data.site.siteMetadata.siteUrl
            },
            {
              name: `og:type`,
              content: "website"
            }
          ]}
        >
          <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
          <html lang="en" />
        </Helmet>

        {location.pathname === withPrefix("/") ? (
          <div className={styles.squares} aria-hidden="true">
            <div className={styles.yellowSquare} aria-hidden="true" />
            <div className={styles.greenSquare} aria-hidden="true" />
            <div className={styles.blueSquare} aria-hidden="true" />
          </div>
        ) : null}

        <header role="banner">
          <Navbar location={location} />
        </header>
        <main role="main">
          <div className={styles.container}>{children}</div>
        </main>
        <footer role="contentinfo">
          <Footer />
        </footer>
      </>
    )}
  />
);

export default Layout;
