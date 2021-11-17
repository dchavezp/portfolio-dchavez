import React from "react";
import Navbar from "../../General/Navbar";
import styles from "./landinghero.module.css";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import HeroAnimation from "../../General/HeroAnimation";
function LandingHero() {
  const MainVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.1,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.2,
      },
    },
  };
  return (
    <motion.div
      className={styles.container}
      variants={MainVariants}
      initial="hidden"
      animate="show"
    >
      <Navbar />
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <div>
            <h1 className={styles.titleSection}>
              {" "}
              Buildind Digital Products <br />
              Solutions
              <span className={styles.titleItem}>&</span>
            </h1>
            <p className={styles.description}>
              Hi i’m a <b>Software Engineer</b> and <b>Product Designer</b>. I
              can help you to build high quality digital products{" "}
            </p>
            <button className={styles.primaryButton}>
              See my work{" "}
              <Icon
                icon="grommet-icons:link-next"
                className={styles.iconButton}
              />
            </button>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.rsDecoration}>
            <div className={styles.rect1}></div>
            <div className={styles.rect2}></div>
          </div>
          <div className={styles.illustration}>
            <HeroAnimation />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LandingHero;
