import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql, withPrefix } from "gatsby";

import Navbar from "./navbar";
import Footer from "./footer";

import "../stylesheets/index.scss";
import "typeface-open-sans";
import "typeface-poppins";

import favicon from "../assets/favicon.ico";

import styles from "./layout.module.scss";

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description
            },
            { name: "keywords", content: "sample, something" }
          ]}
          link={[
            { rel: "shortcut icon", type: "image/png", href: `${favicon}` }
          ]}
        >
          <html lang="en" />
        </Helmet>

        {location.pathname === withPrefix("/") ? (
          <div className={styles.squares}>
            <div className={styles.yellowSquare} />
            <div className={styles.greenSquare} />
            <div className={styles.blueSquare} />
          </div>
        ) : null}

        <Navbar location={location} />
        <div className={styles.container}>{children}</div>
        <Footer />
      </>
    )}
  />
);

export default Layout;
