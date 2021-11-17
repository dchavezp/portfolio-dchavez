import styles from "./services.module.css";
import React from "react";
import TitleSection from "../../General/TitleSection";

function Services() {
  return (
    <div className={styles.container}>
      <section>
        <TitleSection title="Services" subtitle="My main" />
      </section>
    </div>
  );
}

export default Services;
