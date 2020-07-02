import React, { useRef, useEffect, useState } from "react";

const ImageTogglerOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const calcInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    console.log(`useEffect called`);
    window.addEventListener("scroll", scrollHandler);
    setTimeout(() => {
      setIsLoading(false);
      setInView(calcInView());
    }, 2500);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  },[]);

  const [inView, setInView] = useState(false);
  
  const scrollHandler = () => {
    setInView(calcInView());
  };

  return isLoading === true ? (
    <div>loading {isLoading ? "true" : "false"}</div>
  ) : (
    <>
      <img
        src={inView ? secondaryImg : primaryImg}
        alt=""
        ref={imageRef}
        width="200"
        height="200"
      /> --- isLoading: {isLoading ? "true" : "false"}
    </>
  );
};

export default ImageTogglerOnScroll;
