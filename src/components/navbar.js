import React from "react";
import { Link } from "gatsby";
import { Nav, NavItem } from "reactstrap";
import { Location } from "@reach/router";
import styles from "./navbar.module.scss";
import Logo from "../assets/anvil.svg";

const Navbar = ({ theme }) => (
  <Location>
    {({ location: { pathname } }) => {
      const navbarClasses = [
        styles.navbar,
        pathname.endsWith("membership") ? styles.navbarGold : "",
        pathname.endsWith("events") ? styles.navbarBlue : ""
      ]
        .join(" ")
        .trim();

      return (
        <div className={navbarClasses}>
          <Link to="/">
            <div className={styles.brand}>
              <Logo className={styles.brandLogo} />
              <h1 className={styles.brandName}>The Anvil</h1>
            </div>{" "}
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
    }}
  </Location>
);

export default Navbar;
