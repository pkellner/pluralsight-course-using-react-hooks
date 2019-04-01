import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input
        placeholder="Enter Some Text"
        value={inputText}
        onChange={e => {
          setInputText(e.target.value);
        }}
      />
      <br />
      {inputText}
    </div>
  );
};

export default InputElement;
