import React, {useRef, useEffect, useState} from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
 
    const imageRef = useRef(null);
    
    const [isLoading,setIsLoading] = useState(false);
    
    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect();
        const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        // debugger;
        console.log(`isInView: inView ${inView} rect.top: ${rect.top} rect.bottom: ${rect.bottom}`);
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };
    
    const [inView,setInView] = useState(false);
    
    useEffect(() => {
        // debugger;
        //setIsLoading(false);
    
        const rect1 = imageRef.current.getBoundingClientRect();
        console.log(`useEffect: rect1.bottom ${rect1.bottom} rect1.top ${rect1.top} `);
        
        //setInView(isInView());
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    },[]);
    
    const scrollHandler = () => {
        const rect2 = imageRef.current.getBoundingClientRect();
        console.log(`scrollHandler: rect2.bottom ${rect2.bottom} rect2.top ${rect2.top} `);
        //setInView(isInView());
    };
    

    return (
        <img src={isLoading ? "/static/Transparent.gif" : inView ? secondaryImg : primaryImg}
            alt="" ref={imageRef} width="800" height="800"
        />
    );
};

export default ImageToggleOnScroll;