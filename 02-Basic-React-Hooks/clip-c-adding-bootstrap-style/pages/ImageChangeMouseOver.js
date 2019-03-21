import React, { useState, useRef, useEffect } from "react";
import ImageTogglerMouseOver from "../src/ImageTogglerMouseOver";

const ImageChangeMouseOver = () => {
  return (
    <div>
      <ImageTogglerMouseOver
        primaryImg="/static/speakers/bw/Speaker-1124.jpg"
        mouseOverImg="/static/speakers/Speaker-1124.jpg"
      />
        &nbsp;&nbsp;&nbsp;
        <ImageTogglerMouseOver
            primaryImg="/static/speakers/bw/Speaker-187.jpg"
            mouseOverImg="/static/speakers/Speaker-187.jpg"
        />
    </div>
  );
};

export default ImageChangeMouseOver;