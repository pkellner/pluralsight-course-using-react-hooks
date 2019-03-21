import React, { useState, useEffect, useRef } from "react";

    const ImageTogglerMouseOver = ({ primaryImg, mouseOverImg }) => {
      const imageRef = useRef(null);

      const handleMouseOverHandler = () => {
        imageRef.current.src = mouseOverImg;
      };

      const handleMouseOutHandler = () => {
        imageRef.current.src = primaryImg;
      };

      useEffect(() => {
        imageRef.current.addEventListener(
          "mouseover",
          handleMouseOverHandler,
          true
        );
        imageRef.current.addEventListener("mouseout", handleMouseOutHandler, true);
        return () => {
          imageRef.current.removeEventListener(
            "mouseover",
            handleMouseOverHandler,
            false
          );
          imageRef.current.removeEventListener(
            "mouseout",
            handleMouseOutHandler,
            false
          );
        };
      }, []);

  return (
    <img
      className="card-img-top"
      ref={imageRef}
      src={primaryImg}
      alt="image here"
    />
  );
};

export default ImageTogglerMouseOver;
