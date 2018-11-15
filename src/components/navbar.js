import React from "react";
import { Link, withPrefix } from "gatsby";
import { Nav, NavItem } from "reactstrap";

import styles from "./navbar.module.scss";
import Logo from "../assets/anvil.svg";

const Navbar = ({ location }) => {
  const navbarClasses = [
    styles.navbar,
    location.pathname === withPrefix("/membership") ? styles.navbarGold : "",
    location.pathname === withPrefix("/events") ? styles.navbarBlue : ""
  ]
    .join(" ")
    .trim();

  return (
    <div className={navbarClasses}>
      <Link to="/">
        <div className={styles.brand}>
          <Logo className={styles.brandLogo} />
          <h1 className={styles.brandName}>The Anvil</h1>
        </div>
      </Link>
      <Nav>
        <NavItem>
          <Link className="nav-link" to="/membership">
            Membership
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/events">
            Events
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/">
            FAQ
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navbar;
