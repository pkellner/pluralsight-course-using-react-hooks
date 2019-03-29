import React, {useState,useRef,useEffect} from "react";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        setInView(isInView());
        return () => {
            console.log("done");
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
            className="card-img-top"
            ref={imageRef}
            src={inView ? primaryImg : secondaryImg}
            alt="image here"
        />
    );
};

export default ImageToggleOnMouseOver;