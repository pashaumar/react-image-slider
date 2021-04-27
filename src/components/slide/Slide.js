import React from "react";
import styles from "./Slide.module.css";
import { dummyText } from "../../utils/dummytext";
function Slide({ path, activeIndex, index }) {
  const trans = () => {
    return {
      backgroundImage: `url("${path}")`,
      transform: `translateX(-${activeIndex * 100}%)`,
      transition: "all 1s ease",
    };
  };
  return (
    <div className={styles.slide} style={trans()}>
      {dummyText[index]}
    </div>
  );
}

export default Slide;
