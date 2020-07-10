import React, { useEffect, useRef, useState } from "react";

const Page = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const rect = imageRef.current.getBoundingClientRect();
    console.log(`useEffect: rect.bottom ${rect.bottom} rect.top ${rect.top} `);
    setTimeout( () => {
      console.log(`useEffect: after timeout rect.bottom ${rect.bottom} rect.top ${rect.top} `);
    },1000)
  
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });
  
  const scrollHandler = () => {
    const rect2 = imageRef.current.getBoundingClientRect();
    console.log(`scrollHandler: rect2.bottom ${rect2.bottom} rect2.top ${rect2.top} `);
  };

  return (
    <div>
      <img src="https://dummyimage.com/1000" alt="dummy" ref={imageRef} />
    </div>
  );
};

export default Page;
