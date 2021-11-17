import styles from "./titlesection.module.css";
import React from "react";

function TitleSection({ title, subtitle }) {
  return (
    <h1 className={styles.titleSection}>
      {title}
      <h3 className={styles.subtitleSection}>{subtitle}</h3>
    </h1>
  );
}

export default TitleSection;
