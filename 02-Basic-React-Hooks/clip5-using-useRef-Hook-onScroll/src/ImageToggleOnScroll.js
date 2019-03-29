    import React, {useState,useRef,useEffect} from "react";

    // primaryImg is black and white, secondaryImg is color
    const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
        const imageRef = useRef(null);

        useEffect(() => {
            setInView(isInView());
            window.addEventListener("scroll", scrollHandler);

            return () => {
                window.removeEventListener("scroll", scrollHandler);
            };
        }, []);

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
            <img
                ref={imageRef}
                src={inView ? secondaryImg : primaryImg}
                alt=""
            />
        );
    };

    export default ImageToggleOnMouseOver;