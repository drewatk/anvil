import React from "react";

import styles from "./pricing.module.scss";

import Logo from "../assets/anvil.svg";
import emailIcon from "../assets/icons8-email.png";
import facebookIcon from "../assets/icons8-facebook.png";

const Pricing = () => (
  <div className={styles.section}>
    <div className={styles.leftTriangle} />
    <div className={styles.leftContent}>
      <h4>Students</h4>
      <h3><bold>$10</bold></h3>
      <h5>Per Month</h5>
      <h4><a className={styles.joinLink} href="">Join Now</a></h4>
    </div>
    <div className={styles.rhombus}>
      <h4>Join Now</h4>
    </div>
    <div className={styles.rightTriangle} />
    <div className={styles.rightContent}>
      <h4><a className={styles.joinLink} href="">Join Now</a></h4>
      <h3><bold>$10</bold></h3>
      <h5>Per Month</h5>
      <h4>Non-Students</h4>
    </div>
  </div>
);

export default Pricing;
