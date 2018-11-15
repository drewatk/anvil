import React from "react";

import styles from "./pricing.module.scss";

import Logo from "../assets/anvil.svg";
import emailIcon from "../assets/icons8-email.png";
import facebookIcon from "../assets/icons8-facebook.png";

const Pricing = () => (
  <div className={styles.section}>

    <div className={styles.leftTriangle} />

    <div className={styles.leftContent}>
      <h5>Students</h5>
      <div className={styles.price}>
        <h4><bold>$10</bold></h4>
        <h6>Per Month</h6>
      </div>
      <h5><a className={styles.joinLink} href="">Join Now &#8594;</a></h5>
    </div>

    <div className={styles.rhombus}>
      <Logo className={styles.logo}></Logo>
    </div>

    <div className={styles.rightTriangle} />

    <div className={styles.rightContent}>
      <h5><a className={styles.joinLink} href="">Join Now &#8594;</a></h5>
      <div className={styles.price}>
        <h4><bold>$10</bold></h4>
        <h6>Per Month</h6>
      </div>
      <h5>Non-Students</h5>
    </div>

  </div>
);

export default Pricing;
