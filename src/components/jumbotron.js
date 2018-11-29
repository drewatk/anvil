import React from "react";
import { Link } from "gatsby";

import styles from "./jumbotron.module.scss";

const Jumbotron = () => (
  <div className={styles.section}>
    <div className="container-fluid">
      <div className={styles.jumbotron}>
        <h2 className={`${styles.jumbotronHeader} text-uppercase`}>
          A Hub to Connect, Grow, & Learn
          <br />
          At Purdue
        </h2>
        <Link to="/about" className={`${styles.jumbotronLink}`}>
          <h3 className="float-md-right">Learn More&nbsp;→</h3>
        </Link>
      </div>
    </div>
  </div>
);

export default Jumbotron;
