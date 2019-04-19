import React from "react";
import ImageToggleOnScrollClass from "../src/ImageToggleOnScrollClass";

const ImageChangeOnScrollClass = () => {
  return (
    <div>
      {[1124, 187, 823, 1269, 1530].map(speakerId => {
        return (
          <div key={speakerId}>
            <ImageToggleOnScrollClass
              primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
              secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScrollClass;
