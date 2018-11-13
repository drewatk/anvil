import React from "react";

import styles from "./title-section.module.scss";

const TitleSection = ({ title, theme, Pattern }) => {
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
      <Pattern className={styles.pattern} />
    </div>
  );
};

export default TitleSection;
