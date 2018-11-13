import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { Location } from "@reach/router";

import Navbar from "./navbar";
import Footer from "./footer";

import "../stylesheets/index.scss";
import "typeface-open-sans";
import "typeface-poppins";

import favicon from "../assets/favicon.ico";

import styles from "./layout.module.scss";

const Layout = ({ children }) => (
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
        <Location>
          {({ location: { pathname } }) => {
            return pathname.endsWith("/") ? (
              <div className={styles.squares}>
                <div className={styles.yellowSquare} />
                <div className={styles.greenSquare} />
                <div className={styles.blueSquare} />
              </div>
            ) : null;
          }}
        </Location>
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <div className={styles.container}>{children}</div>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
