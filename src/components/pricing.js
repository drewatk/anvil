import React from "react";

import styles from "./pricing.module.scss";

import Logo from "../assets/anvil.svg";

const Pricing = () => (
  <div className={styles.section}>
    <div className={styles.leftTriangle} />

    <div className={styles.leftContent}>
      <h5 className="text-uppercase">Students</h5>
      <div className={styles.price}>
        <h4 className="text-uppercase">$10</h4>
        <h6 className="text-uppercase">Per Month</h6>
      </div>
      <h5 className="text-uppercase">
        <a
          className={styles.joinLink}
          href="https://anvilstartups1.typeform.com/to/Qx3fl2"
          aria-label="Join as a student, $10 per month"
        >
          Join Now &#8594;
        </a>
      </h5>
    </div>

    <div className={styles.rhombus}>
      <Logo className={styles.logo} />
    </div>

    <div className={styles.rightTriangle} />

    <div className={styles.rightContent}>
      <h5 className="text-uppercase">
        <a
          className={styles.joinLink}
          href="https://anvilstartups1.typeform.com/to/Qx3fl2"
          aria-label="Join as a non-student community member, $30 per month"
        >
          Join Now &#8594;
        </a>
      </h5>
      <div className={styles.price}>
        <h4 className="text-uppercase">$30</h4>
        <h6 className="text-uppercase">Per Month</h6>
      </div>
      <h5 className="text-uppercase">Non-Students</h5>
    </div>
  </div>
);

export default Pricing;
