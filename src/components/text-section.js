import React from "react";
import Img from "gatsby-image";

import styles from "./text-section.module.scss";

const TitleSection = ({ title, subheading, paragraphs, theme, imageFluid }) => {
  const sectionClasses = [
    styles.section,
    theme === "blue" ? styles.sectionBlue : "",
    theme === "gold" ? styles.sectionGold : ""
  ]
    .join(" ")
    .trim();

  return (
    <div className={sectionClasses}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h3 className={`${styles.title} text-uppercase`}>{title}</h3>
            <h4 className={styles.subheading}>{subheading}</h4>
            {paragraphs &&
              paragraphs.map((para, index) => {
                return <p key={index}>{para}</p>;
              })}
          </div>
          <div className="col-md-4">
            {/* {imageSource && (
              <Img className="img-thumbnail" fluid={imageFluid} />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
