import React from "react";
import { navigate } from "gatsby";

import styles from "./squares.module.scss";

import PatternBlue from "../assets/pattern_blue.svg";
import PatternYellow from "../assets/pattern_Yellow.svg";
import PatternGreen from "../assets/pattern_Green.svg";

const Squares = () => (
  <div className="continer">
    <div className="row">
      <div
        className={`${styles.square} ${styles.yellowSquare} ${
          styles.colLeft
        } col`}
        onClick={() => navigate("/membership")}
      >
        <h2 className={`${styles.squareHeader} text-uppercase`}>Membership</h2>
        <PatternYellow className={styles.pattern} />
      </div>

      <div
        className={`${styles.square} ${styles.blueSquare} ${
          styles.colRight
        } col`}
        onClick={() => navigate("/events")}
      >
        <h2 className={`${styles.squareHeader} text-uppercase`}>Events</h2>
        <PatternBlue className={styles.pattern} />
      </div>

      <div
        className={`${styles.square} ${styles.greenSquare} ${
          styles.colRight
        } col`}
        onClick={() => navigate("/sponsor")}
      >
        <h2 className={`${styles.squareHeader} text-uppercase`}>Sponsor</h2>

        <PatternGreen className={styles.pattern} />
      </div>
    </div>
  </div>
);

export default Squares;
