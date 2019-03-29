import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";


const ImageChangeOnScroll = () => {
    return (
        <div>
            {[1124, 187, 823].map(speakerId => {
                return (
                    <div key={speakerId}>
                        <ImageToggleOnScroll
                            primaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
                            secondaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
                            alt=""
                        />
                        <br />
                        <br />
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};

export default ImageChangeOnScroll;
