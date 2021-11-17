import React from "react";
import { motion } from "framer-motion";
import styles from "./animateLogo.module.css";
export default function AnimateLogo({ duration, delay }) {
  const MainVariants = {
    hidden: {
      opacity: 0,
      x: "-100px",
    },
    show: {
      opacity: 1,
      x: "0px",
      transition: {
        ease: "easeInOut",
        duration: duration,
        delay: delay,
      },
    },
  };
  const PathVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: duration,
        delay: delay,
      },
    },
  };
  return (
    <motion.svg
      key="AnimateLogo"
      variants={MainVariants}
      initial="hidden"
      animate="show"
      id="Logo"
      data-name="Logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140.4 270.96"
      className={styles.logo}
    >
      <motion.rect
        width="15.35"
        height="142.03"
        initial="hidden"
        animate="show"
        variants={PathVariants}
      />
      <path
        d="M113.93,144H98.57c32.62-7.19,56.36-35.18,57.9-67.49C158.14,41.78,133.75,9.85,98.57,2h15.36c36.16,3.42,64.18,33.09,65.58,68.14C181,107.23,152.26,140.34,113.93,144Z"
        transform="translate(-67.28 -2)"
      />
      <motion.path
        d="M187.23,131l15.34-.55c-32.33,8.36-55,37.19-55.43,69.53-.42,34.8,25.1,65.83,60.54,72.41l-15.34.55c-36.27-2.12-65.33-30.76-68-65.73C121.54,170.21,149.05,136.09,187.23,131Z"
        transform="translate(-67.28 -2)"
        variants={PathVariants}
        initial="hidden"
        animate="show"
      />
    </motion.svg>
  );
}
