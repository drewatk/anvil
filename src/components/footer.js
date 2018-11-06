import React from "react";

import styles from "./footer.module.scss";

import Logo from "../assets/anvil.svg";
import emailIcon from "../assets/icons8-email.png";
import facebookIcon from "../assets/icons8-facebook.png";

const Footer = () => (
  <div className={styles.section}>
    <div className="container-fluid">
      <div className={styles.footer}>
        <div className={styles.brand}>
          <Logo className={styles.logo} />
          <h1 className={styles.brandName}>The Anvil</h1>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.address}>
            320 North Street
            <br />
            West Lafayette, IN 47906
          </div>
          <div className={styles.links}>
            <a href="mailto:contact@anvilstartups.com">
              <img
                className={styles.socialIcon}
                src={emailIcon}
                alt="The Anvil Email"
              />
            </a>
            <a href="https://www.facebook.com/anvilstartups">
              <img
                className={styles.socialIcon}
                src={facebookIcon}
                alt="The Anvil on Facebook"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
