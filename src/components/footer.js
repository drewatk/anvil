import React from "react";

import styles from "./footer.module.scss";

import Logo from "../assets/anvil.svg";
import emailIcon from "../assets/icons8-email.png";
import facebookIcon from "../assets/icons8-facebook.png";
import instagramIcon from "../assets/icons8-instagram_new.png";

const Footer = () => (
  <div className={styles.section}>
    <div className="container-fluid">
      <div className={styles.footer}>
        <div className={styles.brand}>
          <Logo className={styles.logo} />
          <h1 className={styles.brandName}>The Anvil</h1>
        </div>
        <div className={styles.footerBottom}>
          <address className={styles.address}>
            320 North Street
            <br />
            West Lafayette, IN 47906
          </address>
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
            <a href="https://www.instagram.com/anvilstartups">
              <img
                className={styles.socialIcon}
                src={instagramIcon}
                alt="The Anvil on Instagram"
              />
            </a>
          </div>
        </div>
        <div>
          <p className={styles.copyright}>
            Copyright &copy; 2018 The Anvil Inc. Icons designed by{" "}
            <a href="https://icons8.com/" className={styles.link}>
              Icons8
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
