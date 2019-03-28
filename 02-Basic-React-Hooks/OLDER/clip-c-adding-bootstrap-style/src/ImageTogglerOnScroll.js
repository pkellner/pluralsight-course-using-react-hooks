import React, { useState, useEffect, useRef } from "react";

const ImageTogglerOnScroll = ({ primaryImg, secondaryImg }) => {
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    const isInViewx = isInView();
    setInView(isInView());

    return () => {
      console.log("done");
    };
  }, []);

  const imageRef = useRef(null);

  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  const [inView, setInView] = useState(false);
  const scrollHandler = () => {
    setInView(() => {
      return isInView();
    });
  };

  return (
    <div>
      <img
        className="card-img-top"
        ref={imageRef}
        src={inView ? primaryImg : secondaryImg}
        alt="image here"
      />
    </div>
  );
};

export default ImageTogglerOnScroll;
