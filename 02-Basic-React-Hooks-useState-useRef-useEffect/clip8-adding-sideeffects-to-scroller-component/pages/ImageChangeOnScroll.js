import React, { useEffect, useState } from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
  const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
  const [mouseEventCnt, setMouseEventCnt] = useState(0);

  useEffect(() => {
    window.document.title = `SpeakerId: ${currentSpeakerId}`;
    console.log(`useEffect: setting title to ${currentSpeakerId}`);
  });

  return (
    <div>
      <span>mouseEventCnt: {mouseEventCnt}</span>
      {[1124, 823, 187, 1269, 1530].map((speakerId) => {
        return (
          <div
            key={speakerId}
            onMouseOver={() => {
              setCurrentSpeakerId(speakerId);
              setMouseEventCnt(mouseEventCnt + 1);
              console.log(`onMouseOver:${speakerId}`);
            }}
          >
            <ImageToggleOnScroll
              primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
              secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
