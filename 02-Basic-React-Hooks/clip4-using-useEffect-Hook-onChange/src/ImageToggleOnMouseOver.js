import React, {useRef} from "react";

const ImageTogglerOnMouseOver = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
    return (
        <img
            className="card-img-top"
            onMouseOver={() => {
                imageRef.current.src = secondaryImg;
            }}
            onMouseOut={() => {
                imageRef.current.src = primaryImg;
            }}
            ref={imageRef}
            src={primaryImg}
            alt=""
        />
    );
};

export default ImageTogglerOnMouseOver;