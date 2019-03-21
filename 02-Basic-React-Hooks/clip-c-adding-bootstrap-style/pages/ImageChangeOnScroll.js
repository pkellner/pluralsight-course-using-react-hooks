import React, { useState, useRef, useEffect } from "react";
import ImageTogglerOnScroll from "../src/ImageTogglerOnScroll";

const ImageChangeMouseOver = () => {




  return (
    <div>
        {[1124, 187, 823].map(speakerId => {
            return (
                <div key={speakerId}>
                    <ImageTogglerOnScroll primaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
                                   secondaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}  alt="" />
                    <br /><br/><hr/>
                </div>
            );
        })}
    </div>
  );
};

export default ImageChangeMouseOver;