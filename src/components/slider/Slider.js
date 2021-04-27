import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";
import { images } from "../../utils/images";
import { audios } from "../../utils/audios";
import Slide from "../slide/Slide";
import Arrow from "../arrows/Arrow";
import Audio from "../audio/Audio";
function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [path, setPath] = useState(audios[activeIndex]);
  useEffect(() => {
    if (activeIndex < 0) {
      setActiveIndex(images.length - 1);
    } else if (activeIndex > images.length - 1) {
      setActiveIndex(0);
    }
  }, [activeIndex]);

  const showSlide = () => {
    return images.map((item, index) => (
      <Slide path={item} key={index} activeIndex={activeIndex} />
    ));
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slideContainer}>{showSlide()}</div>
      <div className={styles.arrows}>
        <Arrow
          setActiveIndex={setActiveIndex}
          text={"Prev"}
          setPath={setPath}
          activeIndex={activeIndex}
        />
        <Arrow
          setActiveIndex={setActiveIndex}
          text={"Next"}
          setPath={setPath}
          activeIndex={activeIndex}
        />
      </div>

      {path === audios[activeIndex] && (
        <Audio activeIndex={activeIndex} audioPath={path} />
      )}
    </div>
  );
}

export default Slider;
