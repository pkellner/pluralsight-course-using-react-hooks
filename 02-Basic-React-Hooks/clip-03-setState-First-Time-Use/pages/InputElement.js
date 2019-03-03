import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");

  const [historyList, setHistoryList] = useState([]);

  return (
    <div>
      <input
        placeholder="Enter Some Text"
        onChange={e => {
          const newValue = e.target.value;
          setHistoryList([...historyList, newValue]);
          setInputText(newValue);
        }}
      />
      <br />
      inputText: {inputText}
      <hr />
      history:
      <br />
      {historyList.map(function(rec) {
        return <div>{rec}</div>;
      })}
    </div>
  );
};

export default InputElement;
