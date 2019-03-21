import React, { useState, useEffect, useRef } from "react";

const ImageTogglerOnScroll = ({ primaryImg, secondaryImg }) => {
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      console.log("done");
    };
  }, []);

  const imageRef = useRef(null);
  const [inView, setInView] = useState(false);
  const scrollHandler = () => {
    setInView(() => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      }
      return false;
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
