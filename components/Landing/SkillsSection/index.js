import React, { useRef } from "react";
import useComponentOnScreen from "../../../utils/hooks/useComponentOnScreen";
import styles from "./skills.module.css";
function SkillsSection() {
  const targetRef = useRef(null);
  const isVisible = useComponentOnScreen({ threshold: 0.3 }, targetRef);
  return (
    <div ref={targetRef} className={styles.container}>
      {isVisible ? <h1>Es visible</h1> : <h1>No es visiblee</h1>}
    </div>
  );
}

export default SkillsSection;
