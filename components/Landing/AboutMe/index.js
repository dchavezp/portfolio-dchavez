import React, { useRef } from "react";
import useComponentOnScreen from "../../../utils/hooks/useComponentOnScreen";
import styles from "./aboutme.module.css";
import Image from "next/image";
function AboutMeSection() {
  const targetRef = useRef(null);
  const isVisible = useComponentOnScreen({ threshold: 0.3 }, targetRef);
  return (
    <div ref={targetRef} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topLayout}>
          <div>
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.information}>
              I like to build the most value digital products to the client.
              Interested in front end development, the Design of User
              Experciences and the User interfaces.
            </p>
          </div>
          <div>
            <Image
              width="300"
              height="300"
              src="/images/foto.png"
              alt="Dewitt Chavez"
              className={styles.photo}
            ></Image>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
