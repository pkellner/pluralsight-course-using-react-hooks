    import React, {useState,useRef,useEffect} from "react";

    // primaryImg is black and white, secondaryImg is color
    const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
        const imageRef = useRef(null);
        const [isLoading,setIsLoading] = useState(true);

        useEffect(() => {
            setInView(isInView());
            window.addEventListener("scroll", scrollHandler);
            setIsLoading(false)
            return () => {
                 
            };
        }, [isLoading]);

         (false);

        const isInView = () => {
            if (imageRef.current) {
                const rect = imageRef.current.getBoundingClientRect();
                return rect.top >= 0 && rect.bottom <= window.innerHeight;
            }
            return false;
        };

        
        const scrollHandler = () => {
            setInView(() => {
                return isInView();
            });
        };

        return isLoading ? null : (
            <img
                ref={imageRef}
                src={inView ? secondaryImg : primaryImg}
                alt="" width="200" height="200"
            />
        );
    };

    export default ImageToggleOnScroll;