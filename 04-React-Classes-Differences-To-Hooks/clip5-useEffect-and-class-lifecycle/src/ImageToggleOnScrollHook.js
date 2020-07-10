import React, { useRef, useEffect, useState } from "react";

const ImageToggleOnScrollHook = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  const [isThumbnail, setIsThumbnail] = useState(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    setInView(isInView());
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return (
    <div>
      <img
        src={
          isLoading
            ? "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" // 1x1gif
            : inView
            ? secondaryImg
            : primaryImg
        }
        alt=""
        ref={imageRef}
        width={isThumbnail ? "100" : "300"}
        height={isThumbnail ? "100" : "300"}
      />
      <input
        type="checkbox"
        onChange={() => {
          setIsThumbnail(!isThumbnail);
        }}
      />
    </div>
  );
};

export default ImageToggleOnScrollHook;
