import React, { useRef, useEffect } from "react";

const SpeakerDays = ({ show, saturday, sunday }) => {
  const numRendersRef = useRef(1);
  useEffect(() => {
    numRendersRef.current++;
    console.log(`SpeakerDays.js:numRendersRef:${numRendersRef.current} ${Math.random().toString(36).substring(7)}`);
  });
  if (saturday && sunday) return "Speaking Saturday and Sunday";
  if (saturday && !sunday) return "Speaking Saturday";
  if (!saturday && sunday) return "Speaking Sunday";
  if (!saturday && !sunday) return "Not Speaking";
  return show === true ? <React.Fragment>{speakingDays}</React.Fragment> : null;
};

//{/*<div>{show} {saturday} {sunday}</div>*/}

export default SpeakerDays;
