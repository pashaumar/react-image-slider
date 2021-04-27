import React, { useEffect } from "react";
import { audios } from "../../utils/audios";
function Arrow({ setActiveIndex, text, setPath, activeIndex }) {
  useEffect(() => {
    setPath(audios[activeIndex]);
  }, [activeIndex]);
  const handleClick = (text) => {
    if (text === "Prev") {
      setActiveIndex((prevIndex) => prevIndex - 1);
    } else if (text === "Next") {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };
  return <div onClick={() => handleClick(text)}>{text}</div>;
}

export default Arrow;
