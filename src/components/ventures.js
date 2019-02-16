import React from "react";
import Img from "gatsby-image";

import styles from "./ventures.module.scss";

import Mimir from "../assets/ventures/mimir-logotype-reverse-no-padding.svg";

const Ventures = ({ Pattern, index }) => {
  index = index ? index : 0;

  const sectionClasses = [styles.section, index % 2 ? styles.sectionGrey : ""]
    .join(" ")
    .trim();

  return (
    <div className={sectionClasses}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Pattern
              className={styles.pattern}
              style={{ transform: `rotate(${90 * index}deg)` }}
            />
            <h3 className={`${styles.title} text-uppercase`}>Our Ventures</h3>
            <h4 className={styles.subheading}>Our ventures subheading</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4" />
          <div className="col-md-4">
            <a href="https://www.mimirhq.com/">
              <Mimir />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ventures;
