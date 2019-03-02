import React from "react";

const SpeakerDays = ({ show, saturday, sunday }) => {
  if (saturday && sunday) return "Speaking Saturday and Sunday";
  if (saturday && !sunday) return "Speaking Saturday";
  if (!saturday && sunday) return "Speaking Sunday";
  if (!saturday && !sunday) return "Not Speaking";
  return show === true ? <React.Fragment>{speakingDays}</React.Fragment> : null;
};

export default SpeakerDays;
