import React from "react";

import styles from "./title-section.module.scss";

const TitleSection = ({ title, theme }) => {
  const sectionClasses = [
    styles.section,
    theme === "blue" ? styles.sectionBlue : "",
    theme === "gold" ? styles.sectionGold : ""
  ]
    .join(" ")
    .trim();

  return (
    <div className={sectionClasses}>
      <h2 className={`${styles.title} text-uppercase`}>{title}</h2>
    </div>
  );
};

export default TitleSection;
