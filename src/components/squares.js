import React from "react";
import { navigate } from "gatsby";

import styles from "./squares.module.scss";

import PatternBlue from "../assets/pattern_blue.svg";
import PatternYellow from "../assets/pattern_Yellow.svg";
import PatternGreen from "../assets/pattern_Green.svg";

const Squares = () => (
  <div className={styles.squares}>
    <div className="container-fluid">
      <div className="row">
        <div
          className={`${styles.square} ${styles.yellowSquare} ${
            styles.colLeft
          } col-md`}
          onClick={() => navigate("/membership")}
        >
          <h2 className={`${styles.squareHeading} text-uppercase`}>
            Membership
          </h2>
          <PatternYellow className={styles.pattern} />
        </div>

        <div
          className={`${styles.square} ${styles.blueSquare} ${
            styles.colRight
          } col-md`}
          onClick={() => navigate("/events")}
        >
          <h2 className={`${styles.squareHeading} text-uppercase`}>Events</h2>
          <PatternBlue className={styles.pattern} />
        </div>

        <div
          className={`${styles.square} ${styles.greenSquare} ${
            styles.colRight
          } col-md`}
          onClick={() => navigate("/sponsor")}
        >
          <h2 className={`${styles.squareHeading} text-uppercase`}>Sponsor</h2>

          <PatternGreen className={styles.pattern} />
        </div>
      </div>
    </div>
  </div>
);

export default Squares;
