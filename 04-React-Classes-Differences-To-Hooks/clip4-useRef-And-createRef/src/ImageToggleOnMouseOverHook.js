import React, { useRef } from "react";

const ImageToggleOnMouseOverHook = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);

  return (
    <div>
      <i>ImageToggleOnMouseOver - Functional Component React Hooks</i><br/>
      <img
        onMouseOver={() => {
          imageRef.current.src = secondaryImg;
        }}
        onMouseOut={() => {
          imageRef.current.src = primaryImg;
        }}
        src={primaryImg}
        alt=""
        ref={imageRef}
      />
    </div>
  );
};

export default ImageToggleOnMouseOverHook;
