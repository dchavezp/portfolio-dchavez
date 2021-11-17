import React from "react";
import AboutMeSection from "./AboutMe";
import LandingHero from "./LandingHero";
import SkillsSection from "./SkillsSection";
import styles from "./landing.module.css";
import Services from "./Services";
export default function LandingPage() {
  return (
    <>
      <div className={styles.back}></div>
      <LandingHero />
      <Services />
      <AboutMeSection />
      <SkillsSection />
    </>
  );
}
