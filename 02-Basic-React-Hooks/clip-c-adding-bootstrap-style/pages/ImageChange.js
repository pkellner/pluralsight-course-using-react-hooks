import React, { useState, useRef, useEffect } from "react";
import ImageToggler from "../src/ImageToggler";

const ImageChange = () => {
  return (
    <div>
      <ImageToggler
        primaryImg="/static/speakers/bw/Speaker-1124.jpg"
        mouseOverImg="/static/speakers/Speaker-1124.jpg"
      />
        &nbsp;&nbsp;&nbsp;
        <ImageToggler
            primaryImg="/static/speakers/bw/Speaker-187.jpg"
            mouseOverImg="/static/speakers/Speaker-187.jpg"
        />
    </div>
  );
};

export default ImageChange;