import React from "react";
import { Link } from "gatsby";
import { Nav, NavItem } from "reactstrap";
import styles from "./navbar.module.scss";
import Logo from "../assets/anvil.svg";

const Navbar = ({ siteTitle }) => (
  <div className={styles.navbar}>
    <div className={styles.brand}>
      <Logo className={styles.logo} />
      <h1 className={styles.brandName}>The Anvil</h1>
    </div>
    <Nav>
      <NavItem>
        <Link className="nav-link" to="/">
          About
        </Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/">
          Events
        </Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/">
          Membership
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

export default Navbar;
