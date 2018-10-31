import React from "react";
import { Link } from "gatsby";

import styles from "./squares.module.scss";

const Squares = () => (
  <div className="continer">
    <div className="row">
      <div className={`${styles.yellowSquare} ${styles.colLeft} col`}>
        <h2 className={`${styles.squareHeader} text-uppercase`}>Membership</h2>
      </div>
      <div className={`${styles.blueSquare} ${styles.colRight} col`}>
        <h2 className={`${styles.squareHeader} text-uppercase`}>Events</h2>
      </div>
      <div className={`${styles.greenSquare} ${styles.colRight} col`}>
        <h2 className={`${styles.squareHeader} text-uppercase`}>Sponsor</h2>
      </div>
    </div>
  </div>
);

export default Squares;
