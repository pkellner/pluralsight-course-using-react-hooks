import React, { useRef } from "react";



function test3(props) {

    const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    //inputEl.current.focus();

    inputEl.current.select();
    document.execCommand("copy");
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <br />
      <button onClick={onButtonClick}>Copy Text To Clipboard</button>
    </div>
  );
}

export default test3;
