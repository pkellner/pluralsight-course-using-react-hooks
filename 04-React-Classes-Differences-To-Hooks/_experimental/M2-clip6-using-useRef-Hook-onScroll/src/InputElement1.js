import React, { useState } from "react";

const InputElement1 = () => {
  const [inputText, setInputText] =
    useState("");

  return (
    <div>
      <a href="/">home</a>
      <h1>InputElement1 - Functional Component React Hooks</h1>
      <input
        onChange={e => {
          setInputText(e.target.value);
        }}
        placeholder="Enter Some Text"
      />
      <br />
      {inputText}
    </div>
  );
};

export default InputElement1;
