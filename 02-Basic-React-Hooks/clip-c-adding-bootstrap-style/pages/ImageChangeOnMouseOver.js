import React from "react";
import ImageTogglerOnMouseOver from "../src/ImageTogglerOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageTogglerOnMouseOver
        primaryImg="/static/speakers/bw/Speaker-1124.jpg"
        secondaryImg="/static/speakers/Speaker-1124.jpg"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageTogglerOnMouseOver
        primaryImg="/static/speakers/bw/Speaker-187.jpg"
        secondaryImg="/static/speakers/Speaker-187.jpg"
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
