import React, { useState } from "react";

const MyFunct = () => {
  const [inputText, setInputText] =
    useState("");
  return (
    <input
      onChange={e => {
        setInputText
        (e.target.value);
      }}
    />
  );
};

export default InputElement1;
