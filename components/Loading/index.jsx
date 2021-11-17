import React from "react";
import styles from "./loading.module.css";
import { motion } from "framer-motion";
import AnimateLogo from "../General/AnimateLogo";
function Loading({ onEndCharge }) {
  const MainVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      x:-100,
      transition: {
        ease: "easeInOut",
        duration: 1.2,
      },
    },
  };
  const TitleVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
        delay: 1,
      },
    },
  };
  const SubtitleVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
        delay: 1.8,
      },
    },
  };
  return (
    <motion.div
      key="Main"
      variants={MainVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className={styles.container}
    >
      <AnimateLogo delay={0.8} duration={1} />
      <div>
        <motion.h1
          initial="hidden"
          animate="show"
          variants={TitleVariants}
          className={styles.title}
        >
          Dewitt Scott Chavez Ponce
        </motion.h1>
        <motion.h2
          initial="hidden"
          animate="show"
          variants={SubtitleVariants}
          onAnimationComplete={() => {
            onEndCharge(true);
          }}
          className={styles.subtitle}
        >
         Software Engineer - Product Designer
        </motion.h2>
      </div>
    </motion.div>
  );
}

export default Loading;
