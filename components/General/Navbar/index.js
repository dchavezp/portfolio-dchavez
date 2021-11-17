import React from "react";
import Logo from "../Logo";
import styles from "./navbar.module.css";
function Navbar() {
  return (
    <div className={styles.container}>
      <Logo />
      <ul className={styles.links}>
        <li>About me</li>
        <li>My skills</li>
        <li>My Work</li>
        <li>My Certifications</li>
        <li className={styles.contact}>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
