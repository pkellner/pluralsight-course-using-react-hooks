import React, { useRef, useEffect, useState } from "react";

const ImageTogglerOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const calcInView = () => {
    if (!imageRef.current) return false;
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    // setIsLoading(false);
    // setInView(calcInView());
    
    setTimeout(() => {
      setIsLoading(false);
      setInView(calcInView());
    }, 0);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  },[]);

  const [inView, setInView] = useState(false);
  
  const scrollHandler = () => {
    setInView(calcInView());
  };
  
  return isLoading ? null : (
    <img
      src={inView ? secondaryImg : primaryImg}
      alt="" ref={imageRef} width="200" height="200"
    />
  );
  
};

export default ImageTogglerOnScroll;
