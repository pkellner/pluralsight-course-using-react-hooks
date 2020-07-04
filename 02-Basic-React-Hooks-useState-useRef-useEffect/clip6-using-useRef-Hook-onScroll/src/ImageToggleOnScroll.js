import React, { useRef, useEffect, useState } from "react";

const ImageTogglerOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
  
    console.log(`useEffect called ImageToggleOnScroll ${new Date()} ${primaryImg} ${isLoading}`);
  
    window.addEventListener("scroll", scrollHandler);

    // setIsLoading(false);
    // setInView(isInView());

    setTimeout(() => {
      setIsLoading(false);
      setInView(isInView());
    }, 1000);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  const [inView, setInView] = useState(false);

  const scrollHandler = () => {
    setInView(isInView());
  };
  
  console.log(`Rendering ImageToggleOnScroll ${new Date()} ${primaryImg} ${isLoading}`);
  
  return (
    <img
      src={
        isLoading
          ? "static/LoadingImage.gif"
          : inView
          ? secondaryImg
          : primaryImg
      }
      alt=""
      ref={imageRef}
      width="200"
      height="200"
    />
  );
};

export default ImageTogglerOnScroll;
