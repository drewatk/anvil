import React from "react";

import styles from "./text-section.module.scss";

const TitleSection = ({ title, subheading, paragraphs, theme }) => {
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
            {paragraphs.map(para => {
              return <p>{para}</p>;
            })}
          </div>
          <div className="col-md-4">
            <img
              className="img-thumbnail"
              src="https://via.placeholder.com/500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
