import React from "react";
import { Link, withPrefix } from "gatsby";
import {
  Nav,
  NavLink,
  NavItem,
  NavbarBrand,
  Navbar,
  NavbarToggler,
  Collapse
} from "reactstrap";

import styles from "./navbar.module.scss";
import Logo from "../assets/anvil.svg";

class SiteNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { location } = this.props;

    const navbarClasses = [
      styles.navbar,
      location.pathname === withPrefix("/membership") ? styles.navbarGold : "",
      location.pathname === withPrefix("/events") ? styles.navbarBlue : "",
      location.pathname === withPrefix("/sponsor") ? styles.navbarGreen : ""
    ]
      .join(" ")
      .trim();

    return (
      <div className={navbarClasses}>
        <Navbar light expand="md">
          <Link to="/" className="navbar-brand">
            <Logo
              className={`${styles.logo} d-inline-block align-top`}
              height="24"
            />
            The Anvil
          </Link>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </NavItem>
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
                <Link className="nav-link" to="/sponsor">
                  Sponsor
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default SiteNavbar;
