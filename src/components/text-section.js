import React from "react";
import Img from "gatsby-image";

import styles from "./text-section.module.scss";

const TextSectionWithPicture = ({
  title,
  subheading,
  paragraphs,
  index,
  imageFluid,
  Pattern
}) => {
  index = index ? index : 0;

  const sectionClasses = [styles.section, index % 2 ? styles.sectionGrey : ""]
    .join(" ")
    .trim();

  return (
    <div className={sectionClasses}>
      <div className="container">
        <div className="row">
          <div className={imageFluid ? "col-md-7" : "col-12"}>
            <Pattern
              className={styles.pattern}
              style={{ transform: `rotate(${90 * index}deg)` }}
            />
            <h3 className={`${styles.title} text-uppercase`}>{title}</h3>
            <h4 className={styles.subheading}>{subheading}</h4>
            {paragraphs &&
              paragraphs.map((para, index) => {
                return <p key={index}>{para}</p>;
              })}
          </div>
          <div className={imageFluid ? "col-md-5" : ""}>
            {imageFluid && <Img fluid={imageFluid} style={{ width: "100%" }} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSectionWithPicture;
