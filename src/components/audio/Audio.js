import React, { useEffect } from "react";
import { audios } from "../../utils/audios";
function Audio({ audioPath, activeIndex }) {
  useEffect(() => {
    if (audioPath !== audios[activeIndex]) {
      document.getElementById("backgroundMusic").pause();
    } else {
      document.getElementById("backgroundMusic").play();
    }
  }, [audioPath]);

  return (
    <audio id="backgroundMusic">
      <source src={audioPath} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
}

export default Audio;
