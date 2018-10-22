import React from "react";
import { Link } from "gatsby";
import styles from "./header.module.scss";
import logo from "../assets/anvil_logo.png";

const Header = ({ siteTitle }) => (
  <div className={styles.header}>
    <div className={styles.headerContainer}>
      <img className={styles.headerLogo} src={logo} alt="The Anvil" />
      <h1 className={styles.headerText}>
        <Link to="/" className={styles.headerLink}>
          {siteTitle}
        </Link>
      </h1>
      <div className={styles.nav}>
        <ul>
          <li>
            <Link className={styles.navLink} to="/">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/">
              FAQ
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/">
              Events
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
